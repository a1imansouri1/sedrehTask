import React, { useState, useEffect } from 'react'
import ViewTask from '../ViewTask/ViewTask'

const Task = ({ index1, title, description, subTask, status }) => {

    const [openModal, setOpenModal] = useState(false)
    const open = () => setOpenModal(true)
    const close = () => setOpenModal(false)

    const checkedSubtask = subTask.filter(item => item.subTaskStatusKey == true)
    const checkedSubTaskNum = checkedSubtask.length

    return (

        <div className='mr-[20px]'>

            <div
                className="p-6 mt-5 mb-5 max-w-sm rounded-xl cursor-pointer shadow-lg flex-row hover:translate-y-2 duration-300 dark:bg-gray-800"
                onClick={open}

            >
                <h1 className="text-xl mb-2 font-medium dark:text-white">{title}</h1>
                <p className="text-slate-500">{checkedSubTaskNum} of {subTask.length} subtasks
                </p>
            </div>
            {
                openModal ?
                    <ViewTask index1={index1} title={title} description={description} subTask={subTask} status={status} closeModal={close} checkedSubTaskNum={checkedSubTaskNum} />
                    :
                    ''
            }

        </div>
    )
}

export default Task