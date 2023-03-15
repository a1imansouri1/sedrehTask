import React, { useState } from 'react'
import Header from '../Components/Header/Header'
import DoingTaskItems from '../Components/StatusTaskItems/DoingTaskItems/DoingTaskItems'
import DoneTaskItems from '../Components/StatusTaskItems/DoneTaskItems/DoneTaskItems'
import ToDOTaskItems from '../Components/StatusTaskItems/ToDOTaskItems/ToDOTaskItems'

const PlatformLaunch = () => {

  return (

    <Header title='Platform Launch'>

      <div className='grid grid-cols-4 gap-4 mt-[20px] ml-[20px]' >
        <ToDOTaskItems />
        <DoingTaskItems />
        <DoneTaskItems />

      </div>

    </Header>


  )
}

export default PlatformLaunch