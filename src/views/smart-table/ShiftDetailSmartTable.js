import React, { useState, useContext } from 'react'
import { CBadge, CButton, CCardBody, CCollapse, CSmartTable } from '@coreui/react-pro'
import { displayData } from '../../service/displayService.js'
import { format } from 'date-fns'
import FilterContext from './ShiftDetail.js'

import { FilteredShiftData } from './ShiftDetail.js'

const ShiftDetailSmartTable = () => {
  const [details, setDetails] = useState([])
  console.log('filtered shift data in detail')
  const filteredData = useContext(FilterContext)
  console.log(filteredData)
  console.log(FilteredShiftData)
  console.log('filter from smart table')
  const columns = [
    {
      key: 'displayName',
      label: 'Display Name',
      _style: { width: '10%' },
    },
    {
      key: 'shiftNumber',
      label: 'Shift Number',
      _style: { width: '10%' },
    },
    {
      key: 'shiftTime',
      label: 'Shift Start Time',
      _style: { width: '30%' },
      Cell: ({ value }) => {
        console.log(value)
        console.log(format(new Date(value), 'MM-dd HH:mm:ss'))
        format(new Date(value), 'MM-dd HH:mm:ss')
      },
    },
    {
      key: 'batteryNumber',
      label: 'Battery Number',
      _style: { width: '10%' },
      // _props: { color: 'danger', className: 'fw-semibold' },
      // color: 'danger',
      // formatter: (Red) => {
      //   // Apply red color if age > 30, green if age <= 30
      //   const color = 'red'
      //   return <span style={{ color }}>{Red}</span>
      // },
    },
    {
      key: 'minVoltage',
      label: 'Min Voltage',
      _style: { width: '10%' },
      // _props: { color: 'danger', className: 'fw-semibold' },
      // color: 'danger',
      // formatter: (Red) => {
      //   // Apply red color if age > 30, green if age <= 30
      //   const color = 'red'
      //   return <span style={{ color }}>{Red}</span>
      // },
    },
    {
      key: 'minTime',
      label: 'Min Time',
      _style: { width: '10%' },
      // _props: { color: 'warning', className: 'fw-semibold' },
    },
    {
      key: 'maxVoltage',
      label: 'Max Voltage',
      _style: { width: '10%' },
      // _props: { color: 'success', className: 'fw-semibold' },
    },
    {
      key: 'maxTime',
      label: 'Max Time',
      _style: { width: '10%' },
      // _props: { color: 'info', className: 'fw-semibold' },
    },
    {
      key: 'errorCode',
      label: 'Error Code',
      _style: { width: '10%' },
      // formatter: (value) => (
      //   <span style={{ color: 'red' }}>hi</span>
      // <div
      //   style={{
      //     backgroundColor: value,
      //     height: '20px',
      //     width: '20px',
      //     borderRadius: '50%',
      //   }}
      // >
      //   {value}
      // </div>
      // ),
      _props: { scope: 'col' },
      // _props: { color: 'secondary', className: 'fw-semibold' },
    },
    // {
    //   key: 'show_details',
    //   label: 'd',
    //   _style: { width: '1%' },
    //   filter: false,
    //   sorter: false,
    // },
  ]
  const getBadge = (status) => {
    switch (status) {
      case 'Red':
        return 'danger'
      case 'Grey':
        return 'secondary'
      case 'Yellow':
        return 'warning'
      case 'Blue':
        return 'info'
      default:
        return 'primary'
    }
  }
  const toggleDetails = (index) => {
    const position = details.indexOf(index)
    let newDetails = details.slice()
    if (position !== -1) {
      newDetails.splice(position, 1)
    } else {
      newDetails = [...details, index]
    }
    setDetails(newDetails)
  }

  return (
    <CSmartTable
      sorterValue={{ column: 'name', state: 'asc' }}
      clickableRows
      tableProps={{
        striped: true,
        hover: true,
      }}
      activePage={1}
      items={FilteredShiftData}
      columns={columns}
      columnFilter
      itemsPerPageSelect
      itemsPerPage={10}
      columnSorter
      footer
      pagination
      scopedColumns={{
        errorCode: (item) => (
          <td>
            <CBadge color={getBadge(item.errorCode)}>{item.errorCode}</CBadge>
          </td>
        ),
      }}
    />
  )
}

export default ShiftDetailSmartTable
