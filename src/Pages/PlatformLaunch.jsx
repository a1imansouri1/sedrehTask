import React, { useState } from 'react'
import Header from '../Components/Header/Header'
import Task from '../Components/Task/Task'
import Status from '../Components/Status/Status'
import { useSelector } from 'react-redux'

const PlatformLaunch = () => {

  const taskItems = useSelector(state => state.task.taskItems)

  return (
    <>
      <Header title='Platform Launch'>
        <div className='ml-[300px]'>
          <Status title='TODO' color='rgb(34 211 238)' toDoQuant='(1)' />
          {
            taskItems.map(item => {
              const subTaskArray = item.subTask
              return (
                <Task title={item.title} subTaskNumber={'0 of '+ subTaskArray.length + ' subtasks'} />
              )
            })
          }
        </div>
      </Header>
    </>
  )
}

export default PlatformLaunch