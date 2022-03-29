export const setApiErrorNotification = (message = '', setter = () => {}) => {
  setter({
    type: 'error',
    customMessage: `Backend API failed with: ${message}`
  })
}
