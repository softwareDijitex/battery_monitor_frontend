import React, { useState, useContext } from 'react'
import { CBadge, CButton, CCardBody, CCollapse, CSmartTable } from '@coreui/react-pro'
import { format } from 'date-fns'
import OverviewContext from './Report.js'
// import { Link } from 'react-router'

// import data from './_data.js'
import { UpdatedData } from './Report.js'

const ReportTable = () => {
  const [details, setDetails] = useState([])
  // console.log(displayData)
  console.log('filter from smart table')
  const filteredData = useContext(OverviewContext)
  console.log(filteredData)
  const columns = [
    {
      key: 'DN',
      label: 'Display Name',
      _style: { width: '30%' },
      // render: ({ row }) => <Link to={{ pathname: `/foo/${row.id}` }}>{row.name}</Link>,
    },
    {
      key: 'shiftCount',
      label: 'Total Shifts',
      _style: { width: '10%' },
    },
    {
      key: 'R',
      label: 'Red',
      _style: { width: '10%' },
      // formatter: (Red) => {
      //   // Apply red color if age > 30, green if age <= 30
      //   const color = 'red'
      //   return <span style={{ color }}>{Red}</span>
      // },
    },
    { key: 'Y', label: 'Yellow', _style: { width: '10%' } },
    { key: 'Gn', label: 'Green', _style: { width: '10%' } },
    { key: 'B', label: 'Blue', _style: { width: '10%' } },
    { key: 'G', label: 'Grey', _style: { width: '10%' } },
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
        striped: true,
        hover: true,
      }}
      activePage={3}
      footer
      items={UpdatedData}
      columns={columns}
      columnFilter
      itemsPerPageSelect
      itemsPerPage={5}
      columnSorter
      pagination
      scopedColumns={{
        status: (item) => (
          <td>
            <CBadge color={getBadge(item.status)}>{item.status}</CBadge>
          </td>
        ),
        show_details: (item) => {
          return (
            <td className="py-2">
              <CButton
                color="primary"
                variant="outline"
                shape="square"
                size="sm"
                onClick={() => {
                  toggleDetails(item.id)
                }}
              >
                {details.includes(item.id) ? 'Hide' : 'Show'}
              </CButton>
            </td>
          )
        },
        details: (item) => {
          return (
            <CCollapse visible={details.includes(item.id)}>
              <CCardBody>
                <h4>{item.username}</h4>
                <p className="text-body-secondary">User since: {item.registered}</p>
                <CButton size="sm" color="info">
                  User Settings
                </CButton>
                <CButton size="sm" color="danger" className="ml-1">
                  Delete
                </CButton>
              </CCardBody>
            </CCollapse>
          )
        },
      }}
    />
  )
}

export default ReportTable
