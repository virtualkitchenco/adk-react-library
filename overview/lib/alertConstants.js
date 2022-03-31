export const alignments = {
  'top-center': { vertical: 'top', horizontal: 'center' },
  'top-right': { vertical: 'top', horizontal: 'right' }
}

export const messages = {
  noResults: 'No results found.',
  duplicateSearch:
    'Duplicate search. Please update search parameters in order to see updated results.'
}

export const alertTypes = {
  noResults: {
    type: 'info',
    purpose: 'noResults'
  },
  duplicateSearch: {
    type: 'info',
    purpose: 'duplicateSearch'
  }
}
