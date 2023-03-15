import React from 'react'

import Header from '../Header/Header'
import SideBar from '../SideBar/SideBar'
import Routers from '../../routes/Routers'

const Layout = ({ title }) => {
  return (
    <div>
      {/* <Header title='Platform Launch' /> */}


      <SideBar />

      <div className='h-full w-10/12 float-right bg-stone-900 text-white'>
        <Routers />
      </div>

    </div>
  )
}

export default Layout