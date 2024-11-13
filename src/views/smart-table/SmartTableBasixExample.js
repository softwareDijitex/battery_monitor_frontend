import React, { useState, useContext } from 'react'
import { CBadge, CButton, CCardBody, CCollapse, CSmartTable } from '@coreui/react-pro'
import { displayData } from '../../service/displayService.js'
import { format } from 'date-fns'
import FilterContext from './SmartTable.js'

import { UpdatedData } from './SmartTable.js'

const SmartTableBasicExample = () => {
  const [details, setDetails] = useState([])
  // console.log(displayData)
  console.log('filter from smart table')
  const filteredData = useContext(FilterContext)
  console.log(filteredData)
  const columns = [
    {
      key: 'DN',
      label: 'Display Name',
      _style: { width: '30%' },
    },
    {
      key: 'S',
      label: 'Start Time',
      _style: { width: '10%' },
      Cell: ({ value }) => {
        console.log(value)
        console.log(format(new Date(value), 'MM-dd HH:mm:ss'))
        format(new Date(value), 'MM-dd HH:mm:ss')
      },
    },

    {
      key: 'N',
      label: 'Shift Number',
      _style: { width: '10%' },
    },
    {
      key: 'R',
      label: 'Red',
      _style: { width: '10%' },
      _props: { color: 'danger', className: 'fw-semibold' },
      // color: 'danger',
      // formatter: (Red) => {
      //   // Apply red color if age > 30, green if age <= 30
      //   const color = 'red'
      //   return <span style={{ color }}>{Red}</span>
      // },
    },
    {
      key: 'Y',
      label: 'Yellow',
      _style: { width: '10%' },
      _props: { color: 'warning', className: 'fw-semibold' },
    },
    {
      key: 'Gn',
      label: 'Green',
      _style: { width: '10%' },
      _props: { color: 'success', className: 'fw-semibold' },
    },
    {
      key: 'B',
      label: 'Blue',
      _style: { width: '10%' },
      _props: { color: 'info', className: 'fw-semibold' },
    },
    {
      key: 'G',
      label: 'Grey',
      _style: { width: '10%' },
      _props: { color: 'secondary', className: 'fw-semibold' },
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
      case 'Active':
        return 'success'
      case 'Inactive':
        return 'secondary'
      case 'Pending':
        return 'warning'
      case 'Banned':
        return 'danger'
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
        striped: false,
        hover: true,
      }}
      activePage={3}
      items={UpdatedData}
      columns={columns}
      columnFilter
      itemsPerPageSelect
      itemsPerPage={10}
      columnSorter
      footer
      pagination
      // scopedColumns={{
      //   status: (item) => (
      //     <td>
      //       <CBadge color={getBadge(item.status)}>{item.status}</CBadge>
      //     </td>
      //   ),
      //   show_details: (item) => {
      //     return (
      //       <td className="py-2">
      //         <CButton
      //           color="primary"
      //           variant="outline"
      //           shape="square"
      //           size="sm"
      //           onClick={() => {
      //             toggleDetails(item.id)
      //           }}
      //         >
      //           {details.includes(item.id) ? 'Hide' : 'Show'}
      //         </CButton>
      //       </td>
      //     )
      //   },
      //   details: (item) => {
      //     return (
      //       <CCollapse visible={details.includes(item.id)}>
      //         <CCardBody>
      //           <h4>{item.username}</h4>
      //           <p className="text-body-secondary">User since: {item.registered}</p>
      //           <CButton size="sm" color="info">
      //             User Settings
      //           </CButton>
      //           <CButton size="sm" color="danger" className="ml-1">
      //             Delete
      //           </CButton>
      //         </CCardBody>
      //       </CCollapse>
      //     )
      //   },
      // }}
    />
  )
}

export default SmartTableBasicExample
