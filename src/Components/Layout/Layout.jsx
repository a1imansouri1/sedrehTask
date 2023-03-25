import React from 'react'

import Header from '../Header/Header'
import SideBar from '../SideBar/SideBar'
import Routers from '../../routes/Routers'

const Layout = ({ title }) => {
  return (
    <div>
      {/* <Header title='Platform Launch' /> */}


      <SideBar />

      <div className='h-full w-10/12 float-right dark:text-white'>
        <Routers />
      </div>

    </div>
  )
}

export default Layout