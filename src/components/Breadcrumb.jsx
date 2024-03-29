import * as React from 'react'
import { Link, useLocation } from 'react-router-dom'

import Breadcrumbs from '@mui/material/Breadcrumbs';
import './Bread.css'
import { Typography } from '@mui/material';
const Breadcrumb = () => {
  const location = useLocation()
  let currentLink =''
  const crumbs = location.pathname.split('/').filter(crumbs => crumbs !=='').map(crumbs => {
    currentLink +=`/${crumbs}`

    return(
      <div className='crumbs' key={crumbs}>
      <Link to={currentLink}>{crumbs}</Link></div>
    )
  })
  console.log(location)
  return (
    <div className=' h-[90px] bg-white  rounded-2xl ml-10 mt-2  w-full'>
    <Breadcrumbs separator="›" aria-label="breadcrumb"><Typography variant='h5'><div className='breadcrumbs'>{crumbs}</div></Typography></Breadcrumbs></div>
  )
}

export default Breadcrumb