import React from 'react'

import Layout from './Components/Layout/Layout'
import useDarkMode from './Hook/useDarkMode'

const App = () => {

  useDarkMode()

  return (
    <div className='h-screen dark:bg-stone-900 bg-blue-50'>
      <Layout />
    </div>
  )
}

export default App