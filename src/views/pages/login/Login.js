import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import setCustomerCode from '../../../utils/userState'
import HandleGetDisplay from '../../../service/displayService.js'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CToast,
  CToastBody,
  CToastClose,
} from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { useNavigate } from 'react-router-dom'
import { login, HandleLogin } from '../../../service/loginService'

export let CustomerId

function Login({ setIsAuthenticated }) {
  const [customerId, setCustomerId] = useState()
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [loginError, setLoginError] = useState(0)
  const navigate = useNavigate()
  const handleLogin = (event) => {
    event.preventDefault()
    const success = false
    //todo: check with actual values from api / db
    if (customerId == 240001 && username == 'Admin' && password == 'Admin@123') {
      // HandleLogin()
      // setCustomerCode(customerId)
      // CustomerId = customerId
      setIsAuthenticated(true)
      // useEffect(() => {
      // loadData()
      // }, [])
      navigate('/smart-Table')
    } else {
      setLoginError(1)
    }
  }

  const loadData = async () => {
    console.log('inside effect to fetch data')
    await HandleGetDisplay()
  }

  const handleToastClose = (event) => {
    setLoginError(0)
  }
  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={5}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={handleLogin}>
                    <h1>Login</h1>
                    <p className="text-body-secondary">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        placeholder="Customer code"
                        autoComplete="customer code"
                        onChange={(e) => setCustomerId(e.target.value)}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        placeholder="Username"
                        autoComplete="username"
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" className="px-4" type="submit">
                          Login
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
        <br />
        <CRow className="justify-content-center">
          <CToast autohide={false} visible={loginError}>
            <div className="d-flex">
              <CToastBody>Please enter correct login details!</CToastBody>
              <CToastClose className="me-2 m-auto" onClick={handleToastClose} />
            </div>
          </CToast>
        </CRow>
      </CContainer>
    </div>
  )
}

// Add PropTypes validation
Login.propTypes = {
  setIsAuthenticated: PropTypes.func.isRequired,
}

export default Login
