const isDev = false

const devBaseURL = 'http://0.0.0.0:8000/'
const prodBaseURL =
  'https://battery-monitor-webapp-endhfdbxavdqhtef.centralindia-01.azurewebsites.net/'
const baseURL = isDev ? devBaseURL : prodBaseURL
export const getDisplayData = baseURL + 'batteryReadings'
export const validateLogin = baseURL + 'login/'
