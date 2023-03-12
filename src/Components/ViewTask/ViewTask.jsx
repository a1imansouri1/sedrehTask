import React from 'react'
import '../../styles/styles.css'

import { Icon } from '@iconify/react';
import overflowMenuVertical from '@iconify/icons-carbon/overflow-menu-vertical';


const ViewTask = ({ closeModal, title, description, subTask, status }) => {

    return (
        <div className='fixed z-10 left-0 top-0 w-full h-full'>

            <div className='w-full h-full' onClick={closeModal}>
            </div>

            <div className='absolute w-[400px] top-[150px] left-[500px] p-5 box-border rounded-[10px] border-none bg-gray-800'>
                <div className='flex justify-between'>
                    <h1 className='text-left font-bold mb-[20px]'>
                        {title}
                    </h1>
                    <Icon icon={overflowMenuVertical} color="rgb(148 163 184)" height='25' />
                </div>

                <p className='text-[12px]  text-gray-400'>
                    {description}
                </p>

                <label className='block mb-3 mt-3 text-xs'>

                    Subtasks 2 of {subTask.length}

                </label>

                {
                    subTask.map(item => {
                        return (

                            < div className='mb-2 flex gap-1 items-center p-3 box-border rounded-[10px] border-none bg-gray-900'>
                                <input className='w-4 h-4 cursor-pointer' type="checkbox" />
                                <label className='text-[10px]'>
                                    {item.subTaskKey}
                                </label>
                            </div>
                        )
                    })
                }

                <label className='block text-xs mt-[15px] mb-1'>Status</label>
                {
                    status == 'Todo' ?

                        (

                            <select
                                className='text-xs pl-3 h-[30px] cursor-pointer w-full rounded-[5px] bg-gray-800 border-2 border-gray-700 text-gray-400'>
                                <option value="Todo">Todo</option>
                                <option value="Doing">Doing</option>
                                <option value="Done">Done</option>
                            </select>
                        )
                        :
                        status == 'Doing' ?
                            (
                                <select className='text-xs pl-3 h-[30px] cursor-pointer w-full rounded-[5px] bg-gray-800 border-2 border-gray-700 text-gray-400'>
                                    <option value="Doing">Doing</option>
                                    <option value="Todo">Todo</option>
                                    <option value="Done">Done</option>
                                </select>
                            )
                            :
                            (
                                <select className='text-xs pl-3 h-[30px] cursor-pointer w-full rounded-[5px] bg-gray-800 border-2 border-gray-700 text-gray-400'>
                                    <option value="Done">Done</option>
                                    <option value="Todo">Todo</option>
                                    <option value="Doing">Doing</option>
                                </select>
                            )

                }

            </div>

        </div >
    )
}

export default ViewTask