import React, { useState } from 'react'
import ViewTask from '../ViewTask/ViewTask'

import { useSelector } from 'react-redux'

const Task = ({ title, subTaskNumber, description, subTask, status }) => {

    const [openModal, setOpenModal] = useState(false)
    const open = () => setOpenModal(true)
    const close = () => setOpenModal(false)

    const taskItems = useSelector(state => state.task.taskItems)

    return (

        <div>

            <div
                className="p-6 mb-5 max-w-sm bg-gray-800 rounded-xl cursor-pointer shadow-lg flex-row hover:translate-y-2 duration-300"
                onClick={open}

            >
                <h1 className="text-xl mb-2 font-medium text-white">{title}</h1>
                <p className="text-slate-500">{subTaskNumber}</p>
            </div>
            {
                openModal ?
                    <ViewTask title={title} description={description} subTask={subTask} status={status} closeModal={close} />
                    :
                    ''
            }

        </div>
    )
}

export default Task