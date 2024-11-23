import React, { useState, useEffect, createContext } from 'react'
import { displayData } from '../../service/displayService.js'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CButton,
  CCollapse,
  CDateRangePicker,
  CFormLabel,
  CMultiSelect,
  CFormSelect,
  CForm,
} from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'
import { cilFilter } from '@coreui/icons'
import ShiftDetailSmartTable from './ShiftDetailSmartTable'
// import { login } from '../../service/loginService.js'

export let FilteredShiftData
const FilterContext = createContext(displayData)

// const FilterContext = createContext(displayData)

const ShiftReport = () => {
  const [visible, setVisible] = useState(false)
  const data = displayData
  const [filteredShiftData, setFilteredShiftData] = useState(displayData)

  let uniqueDisplays
  let uniqueShifts

  const startDate = new Date()
  startDate.setDate(startDate.getDate() - 7)
  const [startDateFrom, setStartDateFrom] = useState(startDate)
  const [startDateTo, setStartDateTo] = useState(new Date())
  const [errorCode, setErrorCode] = useState()
  const [display, setDisplay] = useState()
  const [selectedShifts, setSelectedShifts] = useState()
  const errorCodes = ['Red', 'Yellow', 'Blue', 'Grey', 'Green']

  if (Array.isArray(displayData) && displayData?.length > 0) {
    uniqueDisplays = Array.from(
      new Set(displayData.map((item) => item.DN)), // Get unique names
    ).map((number) => ({
      label: number, // Set 'label'
      value: number, // Set 'value'
    }))

    uniqueShifts = Array.from(
      new Set(displayData.map((item) => item.N)), // Get unique names
    ).map((number) => ({
      label: number, // Set 'label'
      value: number, // Set 'value'
    }))
    // setDisplay(uniqueDisplays.at(0).value)
    // setSelectedShifts(uniqueShifts.at(0).value)
    // setErrorCode(errorCodes.at(0))
  }

  console.log('display data')
  console.log(displayData)

  console.log('unique displays')
  console.log(uniqueDisplays)

  console.log('uniquie shifts')
  console.log(uniqueShifts)

  const handleDisplayChange = (selectedOptions) => {
    console.log('Inside handle Display change')
    setDisplay(selectedOptions)
  }

  const handleFilterChange = (e) => {
    console.log('selected shifts')
    //set default values if user didnt change filters of select
    if (selectedShifts === undefined) {
      setSelectedShifts(uniqueShifts.at(0).value)
    }
    if (display === undefined) {
      setDisplay(uniqueDisplays.at(0).value)
    }
    if (errorCode === undefined) {
      setErrorCode(errorCodes.at(0))
    }
    console.log(selectedShifts)
    console.log(display)
    console.log(errorCode)

    if (display != undefined && selectedShifts != undefined && errorCode != undefined) {
      console.log(displayData)
      const tmp = displayData.filter(
        (item) =>
          display.toLowerCase() == item.DN.toLowerCase() &&
          selectedShifts == item.N &&
          new Date(item.S) >= startDateFrom &&
          new Date(item.S) <= startDateTo,
      )
      console.log(tmp)

      // const data = tmp?.map((shift)=>({
      //   shift.D .map((item) => ({
      //   batteryNumber: item.at(0),
      //   minVoltage: item.at(1),
      //   minTime: item.at(3),
      //   maxVoltage: item.at(2),
      //   maxTime: item.at(4),
      //   errorCode: getColorCode(item.at(5)),
      // })
      // }))

      const data = []
      tmp.forEach((shift) => {
        shift.D.forEach((item) => {
          data.push({
            batteryNumber: item.at(0),
            minVoltage: item.at(1),
            minTime: item.at(3),
            maxVoltage: item.at(2),
            maxTime: item.at(4),
            errorCode: getColorCode(item.at(5)),
            displayName: shift.DN,
            shiftNumber: shift.N,
            shiftTime: shift.S,
          })
        })
      })

      // const data = tmp?.at(0).D?.map((item) => ({
      //   batteryNumber: item.at(0),
      //   minVoltage: item.at(1),
      //   minTime: item.at(3),
      //   maxVoltage: item.at(2),
      //   maxTime: item.at(4),
      //   errorCode: getColorCode(item.at(5)),
      // }))
      FilteredShiftData = data
      console.log('filtered shift data')
      console.log(FilteredShiftData)
      setFilteredShiftData(data)
    }
    e.preventDefault()
  }

  const getColorCode = (number) => {
    switch (number) {
      case '0':
        return 'Grey'
      case '1':
        return 'Red'
      case '2':
        return 'Yellow'
      case '4':
        return 'Green'
      case '8':
        return 'Blue'
    }
  }

  return (
    <FilterContext.Provider value={filteredShiftData}>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-1">
            <CCardBody>
              <CButton color="primary" onClick={() => setVisible(!visible)}>
                <CIcon icon={cilFilter} className="me-2" />
                Filter
              </CButton>
              <CCollapse visible={visible}>
                <CForm onSubmit={handleFilterChange} method="GET">
                  <CCard className="mt-1">
                    <CCardBody>
                      <CRow>
                        <CCol sm={5}>
                          <CFormLabel
                            htmlFor="exampleFormControlInput1"
                            className="col-sm-2 col-form-label col-form-label-sm"
                          >
                            Start Date <span className="text-danger">*</span>
                          </CFormLabel>
                          <CDateRangePicker
                            name="startDatePicker"
                            startDate={startDateFrom}
                            endDate={startDateTo}
                            size="sm"
                            onStartDateChange={(date) => setStartDateFrom(date)}
                            onEndDateChange={(date) => setStartDateTo(date)}
                          />
                        </CCol>
                      </CRow>
                      <br />
                      <CRow>
                        <CCol md={4}>
                          <CFormLabel className="col-sm-4 col-form-label col-form-label-sm">
                            Display Name <span className="text-danger">*</span>
                          </CFormLabel>
                          <CFormSelect
                            name="display"
                            options={uniqueDisplays}
                            size="sm"
                            onChange={(displaySelected) => {
                              setDisplay(displaySelected.target.value)
                            }}
                          />
                        </CCol>
                        <CCol md={4}>
                          <CFormLabel className="col-sm-2 col-form-label col-form-label-sm">
                            Shift
                          </CFormLabel>
                          <CFormSelect
                            name="shiftsDropdown"
                            options={uniqueShifts}
                            size="sm"
                            onChange={(e) => setSelectedShifts(e.target.value)}
                          />
                        </CCol>
                        {/* <CCol md={4}>
                          <CFormLabel className="col-sm-2 col-form-label col-form-label-sm">
                            Error Codes
                          </CFormLabel>
                          <CFormSelect
                            name="errorDropdown"
                            options={errorCodes}
                            size="sm"
                            onChange={(e) => console.log(e.target.value)}
                          />
                        </CCol> */}
                      </CRow>
                      <CRow>
                        <CCol md={2} className="mt-3">
                          <CButton color="primary" type="submit">
                            Apply
                          </CButton>
                        </CCol>
                      </CRow>
                    </CCardBody>
                  </CCard>
                </CForm>
              </CCollapse>
            </CCardBody>
            <CCardBody>
              <ShiftDetailSmartTable />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </FilterContext.Provider>
  )
}

export default ShiftReport
