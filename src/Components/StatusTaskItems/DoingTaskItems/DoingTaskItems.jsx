import React from 'react'
import Status from '../../Status/Status'
import Task from '../../Task/Task'
import { useSelector } from 'react-redux'


const DoingTaskItems = () => {

    const doingTaskItems = useSelector(state => state.task.doingTaskItems)
    // const taskItems = useSelector(state => state.task.taskItems)
    // const doingTaskItems = taskItems.filter(item => item.status == 'Doing')
    
    
    return (
        <div>
            <Status title={'DOING'} color='#8b5cf6' toDoQuant={doingTaskItems.length} />

            {
                doingTaskItems.map((item, index) => {
                    return (
                        <Task key={index} index1={index} title={item.title} description={item.description} subTask={item.subTask} status={item.status} />
                    )
                })
            }
        </div>
    )
}

export default DoingTaskItems