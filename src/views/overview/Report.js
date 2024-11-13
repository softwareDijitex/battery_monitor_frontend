// import React, { useState, useEffect, createContext } from 'react'
// import { displayData } from '../../service/displayService.js'
// import {
//   CCard,
//   CCardBody,
//   CCardHeader,
//   CCol,
//   CRow,
//   CButton,
//   CCollapse,
//   CDateRangePicker,
//   CFormLabel,
//   CMultiSelect,
//   CForm,
// } from '@coreui/react-pro'
// import CIcon from '@coreui/icons-react'
// import { cilFilter } from '@coreui/icons'
// import ReportTable from './ReportTable.js'

// export let UpdatedData
// const OverviewContext = createContext(displayData)

// const DisplayReport = () => {
//   const [visible, setVisible] = useState(false)

//   const [filteredData, setFilteredData] = useState(displayData)

//   const uniqueDisplays = Array.from(
//     new Set(displayData.map((item) => item.DN)).map((display) => ({
//       label: display,
//       value: display,
//       selected: true,
//     })),
//   )
//   console.log('uniquie displays')
//   console.log(uniqueDisplays)

//   // const uniqueShifts = Array.from(
//   //   new Set(displayData.map((item) => item.N)), // Get unique names
//   // ).map((number) => ({
//   //   label: number, // Set 'label'
//   //   value: number, // Set 'value'
//   //   selected: true,
//   // }))

//   const displayOverview = displayData.reduce((acc, item) => {
//     const existingDispaly = acc.find((entry) => entry.DN === item.DN)
//     if (existingDispaly) {
//       existingDispaly.shiftCount += 1
//       existingDispaly.G += item.G
//       existingDispaly.R += item.R
//       existingDispaly.Y += item.Y
//       existingDispaly.Gn += item.Gn
//       existingDispaly.B += item.Gn
//     } else {
//       acc.push({
//         DN: item.DN,
//         shiftCount: 1,
//         G: item.G,
//         R: item.R,
//         Y: item.Y,
//         Gn: item.Gn,
//         B: item.B,
//       })
//     }
//     return acc
//   }, [])

//   console.log('overview updated data')
//   console.log(displayOverview)

//   // const shiftCounts = displayData.reduce((acc, item) => {
//   //   acc[item.DN] = (acc[item.DN] || 0) + 1
//   //   return acc
//   // }, {})
//   // const updatedDisplayData = displayData.map((item) => ({
//   //   ...item,
//   //   shiftCount: shiftCounts[item.DN],
//   // }))

//   // console.log(updatedDisplayData)

//   // console.log('uniquie shifts')
//   // console.log(uniqueShifts)

//   const startDate = new Date()
//   startDate.setDate(startDate.getDate() - 7)
//   const [startDateFrom, setStartDateFrom] = useState(startDate)
//   const [startDateTo, setStartDateTo] = useState(new Date())
//   const [display, setDisplay] = useState()
//   // const [selectedShifts, setSelectedShifts] = useState()

//   // const handleSelectedChange = (selectedOptions) => {
//   //   setSelectedShifts(selectedOptions)
//   // }

//   const handleDisplaySelectedChange = (selectedOptions) => {
//     setDisplay(selectedOptions)
//   }

//   const handleFilterChange = (e) => {
//     // console.log('selected shifts')
//     // console.log(selectedShifts)
//     console.log('selected dispaly')
//     console.log(display)
//     console.log('sleected date')
//     console.log(`'${startDateFrom} - ${startDateTo}'`)

//     console.log(displayData)
//     const tmp = displayOverview.filter(
//       (item) => display.some((display) => display.value.toLowerCase() == item.DN),
//       //  &&
//       // selectedShifts.some((shift) => shift.value == item.N) &&
//       // new Date(item.S) >= startDateFrom &&
//       // new Date(item.S) <= startDateTo,
//     )

//     console.log('filter change')
//     UpdatedData = tmp
//     console.log(tmp)
//     setFilteredData(tmp)
//     console.log('above is filtered data')

//     e.preventDefault()
//   }

//   return (
//     <OverviewContext.Provider value={filteredData}>
//       <CRow>
//         <CCol xs={12}>
//           <CCard className="mb-1">
//             {/* <CCardHeader>
//               <strong>Display Report</strong>
//             </CCardHeader> */}
//             {/* <CCardBody>
//               <CAccordion activeItemKey={1}>
//                 <CAccordionItem itemKey={1}>
//                   <CAccordionHeader>
//                     <CButton color="primary">
//                       <CIcon icon={cilFilter} className="me-2" />
//                       Filter
//                     </CButton>
//                   </CAccordionHeader>
//                   <CAccordionBody>
//                     <strong>This is the first item&#39;s accordion body.</strong>
//                     <CButton color="primary">Apply</CButton>
//                   </CAccordionBody>
//                 </CAccordionItem>
//               </CAccordion>
//             </CCardBody> */}
//             {/* Filter UI */}
//             <CCardBody>
//               <CButton color="primary" onClick={() => setVisible(!visible)}>
//                 <CIcon icon={cilFilter} className="me-2" />
//                 Filter
//               </CButton>
//               <CCollapse visible={visible}>
//                 <CForm onSubmit={handleFilterChange} method="GET">
//                   <CCard className="mt-1">
//                     <CCardBody>
//                       {/* <CRow>
//                         <CCol sm={5}>
//                           <CFormLabel
//                             htmlFor="exampleFormControlInput1"
//                             className="col-sm-2 col-form-label col-form-label-sm"
//                           >
//                             Start Date <span className="text-danger">*</span>
//                           </CFormLabel>
//                           <CDateRangePicker
//                             name="startDatePicker"
//                             startDate={startDateFrom}
//                             endDate={startDateTo}
//                             size="sm"
//                             onStartDateChange={(date) => setStartDateFrom(date)}
//                             onEndDateChange={(date) => setStartDateTo(date)}
//                           />
//                         </CCol>
//                       </CRow> */}
//                       {/* <br /> */}
//                       <CRow>
//                         <CCol md={4}>
//                           <CFormLabel className="col-sm-4 col-form-label col-form-label-sm">
//                             Display Name <span className="text-danger">*</span>
//                           </CFormLabel>
//                           <CMultiSelect
//                             name="display"
//                             options={uniqueDisplays}
//                             size="sm"
//                             selectionType="tags"
//                             onChange={(displaySelected) => {
//                               handleDisplaySelectedChange(displaySelected)
//                             }}
//                           />
//                         </CCol>
//                         {/* <CCol md={4}>
//                           <CFormLabel className="col-sm-2 col-form-label col-form-label-sm">
//                             Shift
//                           </CFormLabel>
//                           <CMultiSelect
//                             name="shiftsDropdown"
//                             options={uniqueShifts}
//                             // value={selectedOption}
//                             size="sm"
//                             selectionType="counter"
//                             onChange={(e) => handleSelectedChange(e)}
//                           />
//                         </CCol> */}
//                       </CRow>
//                       <CRow>
//                         <CCol md={2} className="mt-3">
//                           <CButton color="primary" type="submit">
//                             Apply
//                           </CButton>
//                         </CCol>
//                       </CRow>
//                     </CCardBody>
//                   </CCard>
//                 </CForm>
//               </CCollapse>
//             </CCardBody>
//             <CCardBody>
//               <ReportTable />
//             </CCardBody>
//           </CCard>
//         </CCol>
//       </CRow>
//     </OverviewContext.Provider>
//   )
// }

// export default DisplayReport
