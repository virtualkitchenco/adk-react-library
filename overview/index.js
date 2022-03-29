import Container from '@mui/material/Container'
import _ from 'lodash'
import React, { useCallback, useEffect, useState } from 'react'
import Loader from './loader'
import Notification from './notification'
import { alertTypes } from './lib/alertConstants'
import { jsonToQuery } from './utilities/jsonQuery'
import { getSearch as getSearchUtility } from './utilities/getSearch'
import { setApiErrorNotification } from './utilities/setApiErrorNotification'
import Form from './form'
import s from './index.module.css'
import Table from './table'

// useEffect without check requires pre-hoisted constant as directed by react community.
// Check: https://github.com/facebook/react/issues/16255#issuecomment-517123289
const emptyObject = {}

/**
 * @function Overview
 * @param {function} fetch - client-side service function to fetch results from bff
 * @param {JSON} history - react-router-dom history object
 * @param {function} logUserOut - passed as argument to fetch function in order to log user out in the event of an expired backend token
 * @param {boolean} noPagination - indicates to not include pagination in Overview Table
 * @param {Array<JSON>} tableHeaders - collection of static values used to render Overview Table headers
 * @param {JSON} formConstants - constants used to render Overview Form
 * @param {JSON} defaultSearch - default values for URL search params
 * @param {function} renderCustomTable - returns jsx that will render in place of default Overview Table
 * @param {boolean} resetTableOnSearch - reset count and results before updating URL search params; used if renderCustomTable function dynamically renders one of a set of table types
 * @param {boolean} displayTableByDefault - fetch and render Overview Table on page load
 * @param {function} renderTableRowContent - arguments: data object, css classes; returns an array of values for one table row
 * @param {boolean} rightAlignFinalColumn - option to right align final value in each row of Overview Table
 * @param {function} renderCustomFormElements - returns JSX: custom elements for Overview Form
 * @param {function} generateFormParamToValueMap - returns an object mapping form-related URL search params to hook values
 * @param {function} generateFormParamToSetterMap - returns an object mapping form-related URL search params to hook setter functions
 * @param {function} validateForm - runs form validations; returns { validSubmission: boolean }
 * @param {JSON} customNotification - allows parent to render notification
 * @return {JSX} - Overview component consisting of form and table
 */
const Overview = ({
  fetch,
  access = {},
  history,
  logUserOut,
  noPagination,
  tableHeaders,
  formConstants,
  defaultSearch,
  renderCustomTable,
  resetTableOnSearch,
  displayTableByDefault,
  renderTableRowContent,
  rightAlignFinalColumn,
  renderCustomFormElements,
  generateFormParamToValueMap,
  generateFormParamToSetterMap,
  validateForm = () => ({ validSubmission: true }),
  customNotification = emptyObject
}) => {
  const { defaultSort } = defaultSearch

  const [count, setCount] = useState(0)
  const [results, setResults] = useState([])
  const [activePage, setActivePage] = useState(0)
  const [activeSort, setActiveSort] = useState(defaultSort)
  const [activeOrder, setActiveOrder] = useState('ASC')
  const [isLoading, setIsLoading] = useState(false)
  const [fetchByDefault, setFetchByDefault] = useState(
    displayTableByDefault && !results.length
  )

  const [notification, setNotification] = useState({})

  useEffect(() => {
    setNotification(customNotification)
  }, [customNotification])

  const generateTableParamToSetterMap = useCallback(() => {
    if (noPagination) {
      return {
        sort: setActiveSort,
        order: setActiveOrder
      }
    }

    return {
      page: setActivePage,
      sort: setActiveSort,
      order: setActiveOrder
    }
  }, [noPagination])

  const generateGlobalParamToSetterMap = useCallback(() => {
    const formParamToSetterMap = generateFormParamToSetterMap()
    const tableParamToSetterMap = generateTableParamToSetterMap()

    return { ...formParamToSetterMap, ...tableParamToSetterMap }
  }, [generateFormParamToSetterMap, generateTableParamToSetterMap])

  const getSearch = useCallback(() => getSearchUtility(history), [history])

  const resetCountAndResults = () => {
    setCount(0)
    setResults([])
  }

  const handleNoResults = useCallback(() => {
    resetCountAndResults()
    setNotification(alertTypes.noResults)
  }, [])

  const handleResponse = useCallback(
    (response = {}) => {
      const { results, count } = response
      const noResults = !results || !results.length

      if (noResults) {
        handleNoResults()
        return
      }

      setFetchByDefault(false)
      setResults(results)
      setCount(count)
    },
    [handleNoResults]
  )

  const fetchResults = useCallback(async () => {
    setIsLoading(true)

    try {
      const searchParams = getSearch()
      const response = await fetch(searchParams, logUserOut)

      handleResponse(response)
    } catch ({ message }) {
      setApiErrorNotification(message, setNotification)
    } finally {
      setIsLoading(false)
      window.scrollTo(0, 0)
    }
  }, [getSearch, handleResponse, setIsLoading, logUserOut, fetch])

  const updateUI = useCallback(() => {
    const paramToSetterMap = generateGlobalParamToSetterMap()
    const queryParams = getSearch()

    for (const param in paramToSetterMap) {
      const updateElement = paramToSetterMap[param]
      const paramValue = queryParams[param]
      const defaultValue = defaultSearch[param]
      let updatedValue = paramValue || defaultValue

      if (param === 'page') {
        const string = updatedValue
        updatedValue = Number(string)
      }

      updateElement(updatedValue)
    }
  }, [getSearch, generateGlobalParamToSetterMap, defaultSearch])

  useEffect(() => {
    const fetch = history.location.search || fetchByDefault

    updateUI()

    fetch && fetchResults()
  }, [history.location.search, fetchResults, updateUI, fetchByDefault])

  const buildUpdatedSearch = (currentSearch, updates) => ({
    ...defaultSearch,
    ...currentSearch,
    ...updates
  })

  const determineNoChanges = (updates, currentSearch) => {
    const completeCurrentSearch = { ...defaultSearch, ...currentSearch }
    const updatedSearch = buildUpdatedSearch(currentSearch, updates)
    const noChanges =
      JSON.stringify(completeCurrentSearch) === JSON.stringify(updatedSearch)

    return noChanges
  }

  const updateSearch = (updates) => {
    const currentSearch = getSearch()
    const noChanges = determineNoChanges(updates, currentSearch)
    const updatedSearch = buildUpdatedSearch(currentSearch, updates)
    const searchQuery = jsonToQuery(updatedSearch)

    if (noChanges) {
      setNotification(alertTypes.duplicateSearch)
      return
    }

    resetTableOnSearch && resetCountAndResults()
    history.push({ search: searchQuery })
  }

  const determineUpdatedOrder = (updatedSort) => {
    const defaultOrder = 'ASC'
    const toggledOrder = activeOrder === 'ASC' ? 'DESC' : 'ASC'
    const sortUpdated = updatedSort !== activeSort
    const updatedOrder = sortUpdated ? defaultOrder : toggledOrder

    return updatedOrder
  }

  const handleSortChange = (updatedSort) => {
    const defaultPage = 0
    const updatedOrder = determineUpdatedOrder(updatedSort)

    updateSearch({ page: defaultPage, sort: updatedSort, order: updatedOrder })
  }

  const hideNotification = () => {
    setNotification({})
  }

  const handleInputChange = (event) => {
    const {
      target: { name: param, value }
    } = event
    const queryParamToSetterMap = generateFormParamToSetterMap()
    const setter = queryParamToSetterMap[param]

    setter(value)
    hideNotification()
  }

  const handleKeyPress = (event) => {
    const { key } = event
    const isEnterKey = key === 'Enter'

    isEnterKey && handleSubmit()
  }

  const handleSubmit = () => {
    const updatedParameters = generateFormParamToValueMap()
    const updatedSearch = { ...defaultSearch, ...updatedParameters }
    const { validSubmission } = validateForm()

    if (!validSubmission) {
      return
    }

    hideNotification()
    updateSearch(updatedSearch)
  }

  const handleReset = () => {
    setFetchByDefault(!!displayTableByDefault)
    resetCountAndResults()
    hideNotification()
    history.push({ search: '' })
  }

  const renderTable = () => {
    if (renderCustomTable) {
      return renderCustomTable({
        results,
        activeSort,
        activeOrder,
        handleSortChange
      })
    }

    return (
      <Table
        count={count}
        results={results}
        page={activePage}
        sort={activeSort}
        order={activeOrder}
        tableHeaders={tableHeaders}
        noPagination={noPagination}
        handleSortClick={handleSortChange}
        handlePageChange={(page) => updateSearch({ page })}
        renderTableRowContent={renderTableRowContent}
        rightAlignFinalColumn={rightAlignFinalColumn}
      />
    )
  }

  const renderForm = () => (
    <Form
      access={access}
      history={history}
      handleReset={handleReset}
      handleSubmit={handleSubmit}
      updateSearch={updateSearch}
      handleKeyPress={handleKeyPress}
      handleInputChange={handleInputChange}
      formConstants={formConstants}
      renderCustomElements={renderCustomFormElements}
      generateNameToValueMap={generateFormParamToValueMap}
    />
  )

  return (
    <div className={s.marginBottom}>
      {isLoading && <Loader />}
      <Container>
        <Notification
          type={notification.type || ''}
          customMessage={notification.customMessage}
          purpose={notification.customMessage || notification.purpose}
          position='top-right'
          open={!_.isEmpty(notification)}
          onClose={hideNotification}
        />
        {renderForm()}
        {renderTable()}
      </Container>
    </div>
  )
}

export default Overview
