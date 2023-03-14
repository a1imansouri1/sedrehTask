import React, { useState } from 'react'
import Header from '../Components/Header/Header'
import Task from '../Components/Task/Task'
import Status from '../Components/Status/Status'
import { useSelector } from 'react-redux'

const PlatformLaunch = () => {

  const taskItems = useSelector(state => state.task.taskItems)

  return (

    <div>
      <Status title='TODO' color='rgb(34 211 238)' toDoQuant='(1)' />
      {
        taskItems.map((item, index) => {
          const subTaskArray = item.subTask
          return (
            <Task index1={index} title={item.title} description={item.description} subTask={item.subTask} status={item.status} subTaskNumber={'0 of ' + subTaskArray.length + ' subtasks'} />
          )
        })
      }
    </div>

  )
}

export default PlatformLaunch