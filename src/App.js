import React from 'react'

import Layout from './Components/Layout/Layout'
import useDarkMode from './Hook/useDarkMode'
import useOpenSideBar from './Hook/useOpenSideBar'

const App = () => {

  useDarkMode()

  return (
    <div className='h-screen dark:bg-stone-900 bg-blue-50'>
      <Layout />
    </div>
  )
}

export default App