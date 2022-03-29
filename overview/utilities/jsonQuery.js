import _ from 'lodash'

export const jsonToQuery = (json) => {
  if (_.isEmpty(json)) {
    return ''
  }
  return (
    '?' +
    Object.keys(json)
      .map((key) => {
        return json[key] === 0 || json[key]
          ? encodeURIComponent(key) + '=' + encodeURIComponent(json[key])
          : ''
      })
      .filter((keyVal) => keyVal.length)
      .join('&')
  )
}

export const searchToObject = (search = '') => {
  if (search) {
    return search
      .slice(1)
      .split('&')
      .map((pair) => pair.split('='))
      .reduce(
        (obj, [key, value]) => ({ ...obj, [key]: decodeURIComponent(value) }),
        {}
      )
  }

  return {}
}
