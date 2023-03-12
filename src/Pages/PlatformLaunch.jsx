import React, { useState } from 'react'
import Header from '../Components/Header/Header'
import Task from '../Components/Task/Task'
import Status from '../Components/Status/Status'

const PlatformLaunch = () => {

  const [task, setTask] = useState([
    { title: 'Build UI for onboarding flow', description: '0 of 3 subtasks' }
  ])

  const addTask = (task1) => {
    const description = 'abc'
    const newTask = { description, ...task1 }
    setTask([...task, newTask])
  }

  return (
    <>
      <Header title='Platform Launch'>
        <div className='ml-[300px]'>
          <Status title='TODO' color='rgb(34 211 238)' toDoQuant='(1)' />
          {
            task.map(item => {
              return (
                <Task title={item.title} description={item.description} />
              )
            })
          }
        </div>
      </Header>
    </>
  )
}

export default PlatformLaunch