import React, { useState } from 'react'
import ViewTask from '../ViewTask/ViewTask'

const Task = ({ title, description }) => {

    const [openModal, setOpenModal] = useState(false)
    const open = () => setOpenModal(true)
    const close = () => setOpenModal(false)

    return (

        <div>

            <div
                className="p-6 max-w-sm bg-gray-800 rounded-xl cursor-pointer shadow-lg flex-row items-start space-x-4 hover:translate-y-2 duration-300"
                onClick={open}
                
                >
                <div className="text-xl font-medium text-white">{title}</div>
                <p className="text-slate-500">{description}</p>
            </div>
            {
                openModal ?
                    <ViewTask closeModal={close} />
                    :
                    ''
            }

        </div>
    )
}

export default Task