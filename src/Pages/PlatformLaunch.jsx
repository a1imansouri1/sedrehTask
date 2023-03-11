import React from 'react'
import Header from '../Components/Header/Header'
import Task from '../Components/Task/Task'
import Status from '../Components/Status/Status'

const PlatformLaunch = () => {
  return (
    <>
      <Header title='Platform Launch'>
        <Status title='TODO' color='rgb(34 211 238)' toDoQuant='(1)' />
        <div className='ml-[300px]'>
          <Task title='Build UI for onboarding flow' description='0 of 3 substacks' />
        </div>
      </Header>
    </>
  )
}

export default PlatformLaunch