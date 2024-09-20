import React from 'react'
import classNames from 'classnames'
import { useTranslation } from 'react-i18next'

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react-pro'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'

import WidgetsBrand from '../widgets/WidgetsBrand'
import WidgetsDropdown from '../widgets/WidgetsDropdown'
import MainChart from './MainChart'

const Dashboard = () => {
  const { t } = useTranslation()

  const progressExample = [
    {
      title: t('visits'),
      value: t('usersCounter', { counter: '29.703' }),
      percent: 40,
      color: 'success',
    },
    {
      title: t('unique'),
      value: t('usersCounter', { counter: '24.093' }),
      percent: 20,
      color: 'info',
    },
    {
      title: t('pageviews'),
      value: t('viewsCounter', { counter: '78.706' }),
      percent: 60,
      color: 'warning',
    },
    {
      title: t('newUsers'),
      value: t('usersCounter', { counter: '22.123' }),
      percent: 80,
      color: 'danger',
    },
    { title: t('bounceRate'), value: '', percent: 40.15, color: 'primary' },
  ]

  const progressGroupExample1 = [
    { title: t('monday'), value1: 34, value2: 78 },
    { title: t('tuesday'), value1: 56, value2: 94 },
    { title: t('wednesday'), value1: 12, value2: 67 },
    { title: t('thursday'), value1: 43, value2: 91 },
    { title: t('friday'), value1: 22, value2: 73 },
    { title: t('saturday'), value1: 53, value2: 82 },
    { title: t('sunday'), value1: 9, value2: 69 },
  ]

  const progressGroupExample2 = [
    { title: t('male'), icon: cilUser, value: 53 },
    { title: t('female'), icon: cilUserFemale, value: 43 },
  ]

  const progressGroupExample3 = [
    { title: t('organicSearch'), icon: cibGoogle, percent: 56, value: '191,235' },
    { title: 'Facebook', icon: cibFacebook, percent: 15, value: '51,223' },
    { title: 'Twitter', icon: cibTwitter, percent: 11, value: '37,564' },
    { title: 'LinkedIn', icon: cibLinkedin, percent: 8, value: '27,319' },
  ]

  const tableExampleUsagePeriod = (dateStart, dateEnd) => {
    const formatParams = { date: { year: 'numeric', month: 'short', day: 'numeric' } }
    return `${t('date', {
      date: dateStart,
      formatParams,
    })} - ${t('date', {
      date: dateEnd,
      formatParams,
    })}`
  }

  const tableExample = [
    {
      avatar: { src: avatar1, status: 'success' },
      user: {
        name: 'Yiorgos Avraamu',
        new: true,
        registered: t('date', {
          date: new Date(2023, 0, 10),
          formatParams: { date: { year: 'numeric', month: 'short', day: 'numeric' } },
        }),
      },
      country: { name: 'USA', flag: cifUs },
      usage: {
        value: 50,
        period: tableExampleUsagePeriod(new Date(2023, 5, 11), new Date(2023, 6, 10)),
        color: 'success',
      },
      payment: { name: 'Mastercard', icon: cibCcMastercard },
      activity: t('relativeTime', { val: -10, range: 'seconds' }),
    },
    {
      avatar: { src: avatar2, status: 'danger' },
      user: {
        name: 'Avram Tarasios',
        new: false,
        registered: t('date', {
          date: new Date(2023, 0, 10),
          formatParams: { date: { year: 'numeric', month: 'short', day: 'numeric' } },
        }),
      },
      country: { name: 'Brazil', flag: cifBr },
      usage: {
        value: 22,
        period: tableExampleUsagePeriod(new Date(2023, 5, 11), new Date(2023, 6, 10)),
        color: 'info',
      },
      payment: { name: 'Visa', icon: cibCcVisa },
      activity: t('relativeTime', { val: -5, range: 'minutes' }),
    },
    {
      avatar: { src: avatar3, status: 'warning' },
      user: {
        name: 'Quintin Ed',
        new: true,
        registered: t('date', {
          date: new Date(2023, 0, 10),
          formatParams: { date: { year: 'numeric', month: 'short', day: 'numeric' } },
        }),
      },
      country: { name: 'India', flag: cifIn },
      usage: {
        value: 74,
        period: tableExampleUsagePeriod(new Date(2023, 5, 11), new Date(2023, 6, 10)),
        color: 'warning',
      },
      payment: { name: 'Stripe', icon: cibCcStripe },
      activity: t('relativeTime', { val: -1, range: 'hours' }),
    },
    {
      avatar: { src: avatar4, status: 'secondary' },
      user: {
        name: 'Enéas Kwadwo',
        new: true,
        registered: t('date', {
          date: new Date(2023, 0, 10),
          formatParams: { date: { year: 'numeric', month: 'short', day: 'numeric' } },
        }),
      },
      country: { name: 'France', flag: cifFr },
      usage: {
        value: 98,
        period: tableExampleUsagePeriod(new Date(2023, 5, 11), new Date(2023, 6, 10)),
        color: 'danger',
      },
      payment: { name: 'PayPal', icon: cibCcPaypal },
      activity: t('relativeTime', { val: -1, range: 'weeks' }),
    },
    {
      avatar: { src: avatar5, status: 'success' },
      user: {
        name: 'Agapetus Tadeáš',
        new: true,
        registered: t('date', {
          date: new Date(2023, 0, 10),
          formatParams: { date: { year: 'numeric', month: 'short', day: 'numeric' } },
        }),
      },
      country: { name: 'Spain', flag: cifEs },
      usage: {
        value: 22,
        period: tableExampleUsagePeriod(new Date(2023, 5, 11), new Date(2023, 6, 10)),
        color: 'primary',
      },
      payment: { name: 'Google Wallet', icon: cibCcApplePay },
      activity: t('relativeTime', { val: -3, range: 'months' }),
    },
    {
      avatar: { src: avatar6, status: 'danger' },
      user: {
        name: 'Friderik Dávid',
        new: true,
        registered: t('date', {
          date: new Date(2023, 0, 10),
          formatParams: { date: { year: 'numeric', month: 'short', day: 'numeric' } },
        }),
      },
      country: { name: 'Poland', flag: cifPl },
      usage: {
        value: 43,
        period: tableExampleUsagePeriod(new Date(2023, 5, 11), new Date(2023, 6, 10)),
        color: 'success',
      },
      payment: { name: 'Amex', icon: cibCcAmex },
      activity: t('relativeTime', { val: -1, range: 'years' }),
    },
  ]

  return (
    <>
      <WidgetsDropdown className="mb-4" />
    </>
  )
}

export default Dashboard
