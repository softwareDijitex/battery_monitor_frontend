import axios from 'axios'
import { useState } from 'react'
import { getDisplayData } from '../utils/endpointConstants.js'
// import { userLoginDetails } from '../utils/userState.js'

export let displayData = ''

const HandleGetDisplay = async (e) => {
  console.log('request started')
  // console.log(customerCode)
  // const [customerCode, setCustomerCode] = userLoginDetails()
  await axios({
    url: getDisplayData,
    params: { customerCode: '240099' },
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    },
  })
    .then((res) => {
      console.log('resonse recevied')
      console.log(res)
      displayData = res.data
    })
    .catch((error) => {
      console.log('error')
      console.error(error)
    })
}

export default HandleGetDisplay
