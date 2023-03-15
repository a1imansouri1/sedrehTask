import React from 'react'
import Status from '../../Status/Status'
import Task from '../../Task/Task'
import { useSelector } from 'react-redux'

const DoneTaskItems = () => {

    // const taskItems = useSelector(state => state.task.taskItems)
    // const doneTaskItems = taskItems.filter(item => item.status == 'Done')
    const doneTaskItems = useSelector(state => state.task.doneTaskItems)

    return (
        <div>
            <Status title={'DONE'} color='rgb(52 211 153)' toDoQuant={doneTaskItems.length} />

            {
                doneTaskItems.map((item, index) => {
                    return (
                        <Task key={index} index1={index} title={item.title} description={item.description} subTask={item.subTask} status={item.status} />
                    )
                })
            }
        </div>
    )
}

export default DoneTaskItems