import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import closeIcon from '@iconify/icons-material-symbols/close';

const SubTaskInput = ({ subTask, setSubTask, index, removeNewSubTask }) => {

    const subTaskChange = (e, index) => {
        const { name, value } = e.target
        const subTaskStatusKey = 'subTaskStatusKey'
        const list = [...subTask]
        list[index][name] = value
        list[index][subTaskStatusKey] = false
        setSubTask(list)
    }

    return (
        <div className='flex items-center'>
            <input
                className='mb-1 h-[30px] pl-4 w-full text-xs leading-5 bg-gray-800 rounded-[5px] border-2 border-gray-700'
                type="text" placeHolder='e.g. Make coffee'
                // value={subTask.subTaskKey}
                name='subTaskKey'
                onChange={e => {
                    subTaskChange(e, index)
                }}
            />
            <Icon onClick={removeNewSubTask} icon={closeIcon} color='rgb(156 163 175)' className='ml-1.5 cursor-pointer' />

        </div>
    )
}

export default SubTaskInput