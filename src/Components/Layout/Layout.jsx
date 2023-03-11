import React from 'react'

import Header from '../Header/Header'
import SideBar from '../SideBar/SideBar'
import Routers from '../../routes/Routers'

const Layout = ({ title }) => {
  return (
    <div>

      <SideBar />
      
      <div className='text-white'>
        <Routers />
      </div>

    </div>
  )
}

export default Layout