import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react-pro'
import {
  cilBell,
  cilCreditCard,
  cilCommentSquare,
  cilEnvelopeOpen,
  cilFile,
  cilLockLocked,
  cilSettings,
  cilTask,
  cilUser,
  cilAccountLogout,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { useNavigate } from 'react-router-dom'

import avatar8 from './../../assets/images/avatars/8.jpg'

// function AppHeaderDropdown({ setIsAuthenticated }) {
const AppHeaderDropdown = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const handleLogout = () => {
    // setIsAuthenticated(false)
    navigate('/login')
  }
  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle className="py-2" caret={false}>
        <CIcon icon={cilUser} size="lg" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0">
        <CDropdownHeader className="bg-body-secondary text-body-secondary fw-semibold my-2">
          {t('Inoweave')}
        </CDropdownHeader>
        {/* <CDropdownItem href="#">
          <CIcon icon={cilUser} className="me-2" />
          {t('customer name')}
        </CDropdownItem> */}
        {/* <CDropdownDivider />
        <CDropdownItem href="#" onClick={handleLogout}>
          <CIcon icon={cilAccountLogout} className="me-2" />
          {t('logout')}
        </CDropdownItem> */}
      </CDropdownMenu>
    </CDropdown>
  )
}
// AppHeaderDropdown.propTypes = {
//   setIsAuthenticated: PropTypes.func.isRequired,
// }

export default AppHeaderDropdown
