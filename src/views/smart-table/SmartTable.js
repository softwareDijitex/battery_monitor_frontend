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
import SmartTableBasixExample from './SmartTableBasixExample'
// import { login } from '../../service/loginService.js'

export let UpdatedData
const FilterContext = createContext(displayData)

const DisplayReport = () => {
  const [visible, setVisible] = useState(false)
  // const [filter, setFilter] = useState({
  //   startDateFrom: '',
  //   startDateTo: '',
  //   display: '',
  //   shifts: '4',
  // })

  const [filteredData, setFilteredData] = useState(displayData)

  // const uniqueDisplays = [...new Set(displayData.map((item) => item.DN))]
  // const uniqueDisplays = 'display 1'
  const uniqueDisplays = Array.from(
    new Set(displayData.map((item) => item.DN)), // Get unique names
  ).map((number) => ({
    label: number, // Set 'label'
    value: number, // Set 'value'
    selected: true,
  }))

  console.log('uniquie displays')
  console.log(displayData)

  // const uniqueShifts = ''
  const uniqueShifts = Array.from(
    new Set(displayData.map((item) => item.N)), // Get unique names
  ).map((number) => ({
    label: number, // Set 'label'
    value: number, // Set 'value'
    selected: true,
  }))

  console.log('uniquie shifts')
  console.log(uniqueShifts)
  // const displays = [
  //   {
  //     value: 0,
  //     label: 'Display 1',
  //     selected: true,
  //   },
  //   {
  //     value: 1,
  //     label: 'Display 2',
  //     selected: true,
  //   },
  //   {
  //     value: 2,
  //     label: 'Display 3',
  //   },
  // ]
  // const shifts = [
  //   {
  //     value: 0,
  //     label: 'Shift 1',
  //     selected: true,
  //   },
  //   {
  //     value: 1,
  //     label: 'Shift 2',
  //     selected: true,
  //   },
  //   {
  //     value: 2,
  //     label: 'Shift 3',
  //     selected: false,
  //   },
  // ]

  const startDate = new Date()
  startDate.setDate(startDate.getDate() - 7)
  const [startDateFrom, setStartDateFrom] = useState(startDate)
  const [startDateTo, setStartDateTo] = useState(new Date())
  // const [display, setDisplay] = useState(uniqueDisplays[0])
  const [display, setDisplay] = useState()
  const [selectedShifts, setSelectedShifts] = useState()

  const handleSelectedChange = (selectedOptions) => {
    setSelectedShifts(selectedOptions)
  }

  const handleDisplayChange = (selectedOptions) => {
    console.log('Inside handle Display change')
    setDisplay(selectedOptions)
  }

  const handleFilterChange = (e) => {
    console.log('selected shifts')
    console.log(selectedShifts)
    console.log('selected dispaly')
    console.log(display)
    console.log('sleected date')
    console.log(`'${startDateFrom} - ${startDateTo}'`)

    console.log(displayData)
    console.log('value of display')
    console.log(display)
    const tmp = displayData.filter(
      (item) =>
        // item.DN.toLowerCase().includes(display.value) &&
        display.some((dis) => dis.value.toLowerCase() == item.DN.toLowerCase()) &&
        selectedShifts.some((shift) => shift.value == item.N) &&
        new Date(item.S) >= startDateFrom &&
        new Date(item.S) <= startDateTo,
    )

    console.log(displayData[0].S)
    console.log(new Date(displayData[0].S))
    console.log('filter change')
    UpdatedData = tmp
    console.log(tmp)
    setFilteredData(tmp)
    console.log('above is filtered data')

    e.preventDefault()
  }

  // const [filterText, setFilterText] = useState('');
  // const [filteredData, setFilteredData] = useState(data);
  // const handleInputChange = (event) => {
  //   const { startDateFrom, startDateTo, type, checked } = event.target;
  //   setFormData(prevState => ({
  //     ...prevState,
  //     [startDateFrom]: type === 'CDateRangePicker' ? checked : value,
  //   }));
  // };
  // const handleFilterChange = (e) => {
  //   const value = e.target.value;
  //   setFilterText(value);

  //   // Filter the dataset based on the input text
  //   const filtered = data.filter((item) =>
  //     item.name.toLowerCase().includes(value.toLowerCase()) ||
  //     item.job.toLowerCase().includes(value.toLowerCase()) ||
  //     String(item.age).includes(value)
  //   );

  //   setFilteredData(filtered);
  // };

  return (
    <FilterContext.Provider value={filteredData}>
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-1">
            {/* <CCardHeader>
              <strong>Display Report</strong>
            </CCardHeader> */}
            {/* <CCardBody>
              <CAccordion activeItemKey={1}>
                <CAccordionItem itemKey={1}>
                  <CAccordionHeader>
                    <CButton color="primary">
                      <CIcon icon={cilFilter} className="me-2" />
                      Filter
                    </CButton>
                  </CAccordionHeader>
                  <CAccordionBody>
                    <strong>This is the first item&#39;s accordion body.</strong>
                    <CButton color="primary">Apply</CButton>
                  </CAccordionBody>
                </CAccordionItem>
              </CAccordion>
            </CCardBody> */}
            {/* Filter UI */}
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
                          <CMultiSelect
                            name="display"
                            options={uniqueDisplays}
                            size="sm"
                            selectionType="counter"
                            // selectionType="tags"
                            onChange={
                              (displaySelected) => handleDisplayChange(displaySelected)
                              // setDisplay(displaySelected.target.value)
                            }
                          />
                          {/* <CFormSelect
                            name="display"
                            options={uniqueDisplays}
                            size="sm"
                            selectionType="tags"
                            onChange={(displaySelected) => {
                              console.log('onchange')
                              console.log(displaySelected)
                              setDisplay(displaySelected.target.value)
                            }}
                          /> */}
                        </CCol>
                        <CCol md={4}>
                          <CFormLabel className="col-sm-2 col-form-label col-form-label-sm">
                            Shift
                          </CFormLabel>
                          <CMultiSelect
                            name="shiftsDropdown"
                            options={uniqueShifts}
                            // value={selectedOption}
                            size="sm"
                            selectionType="counter"
                            onChange={(e) => handleSelectedChange(e)}
                          />
                        </CCol>
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
              <SmartTableBasixExample />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </FilterContext.Provider>
  )
}

export default DisplayReport
