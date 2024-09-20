import React, { useState } from 'react'
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
} from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'
import { cilFilter } from '@coreui/icons'

import SmartTableBasixExample from './SmartTableBasixExample'

const DisplayReport = () => {
  const [visible, setVisible] = useState(false)
  const displays = [
    {
      value: 0,
      label: 'Display 1',
      selected: true,
    },
    {
      value: 1,
      label: 'Display 2',
      selected: true,
    },
    {
      value: 2,
      label: 'Display 3',
    },
  ]
  const shifts = [
    {
      value: 0,
      label: 'Shift 1',
      selected: true,
    },
    {
      value: 1,
      label: 'Shift 2',
      selected: true,
    },
    {
      value: 2,
      label: 'Shift 3',
    },
  ]
  return (
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
              <CCard className="mt-1">
                <CCardBody>
                  <CRow>
                    <CCol sm={5}>
                      <CFormLabel
                        htmlFor="exampleFormControlInput1"
                        className="col-sm-2 col-form-label col-form-label-sm"
                      >
                        Date <span className="text-danger">*</span>
                      </CFormLabel>
                      <CDateRangePicker startDate="2022/08/03" endDate="2022/08/17" size="sm" />
                    </CCol>
                  </CRow>
                  <br />
                  <CRow>
                    <CCol md={4}>
                      <CFormLabel className="col-sm-2 col-form-label col-form-label-sm">
                        Display
                      </CFormLabel>
                      <CMultiSelect options={displays} size="sm" selectionType="tags" />
                    </CCol>
                    <CCol md={4}>
                      <CFormLabel className="col-sm-2 col-form-label col-form-label-sm">
                        Shift
                      </CFormLabel>
                      <CMultiSelect options={shifts} size="sm" selectionType="counter" />
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol md={2} className="mt-3">
                      <CButton color="primary">Apply</CButton>
                    </CCol>
                  </CRow>
                </CCardBody>
              </CCard>
            </CCollapse>
          </CCardBody>
          <CCardBody>
            <SmartTableBasixExample />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default DisplayReport
