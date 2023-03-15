import React from 'react'
import Status from '../../Status/Status'
import Task from '../../Task/Task'
import { useSelector } from 'react-redux'

const TODOTaskItems = () => {

    const toDOTaskItems = useSelector(state => state.task.toDOTaskItems)
    // const taskItems = useSelector(state => state.task.taskItems)
    // const toDOTaskItems = taskItems.filter(item => item.status == 'Todo')
    // console.log(toDOTaskItems)

    return (
        <div>
            <Status title={'TODO'} color='rgb(34 211 238)' toDoQuant={toDOTaskItems.length} />

            {
                toDOTaskItems.map((item, index) => {
                    return (
                        <Task key={index} index1={index} title={item.title} description={item.description} subTask={item.subTask} status={item.status} />
                    )
                })
            }
        </div>
    )
}

export default TODOTaskItems

