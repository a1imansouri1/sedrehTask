import React from 'react'

const TaskInput = ({title, placeHolder}) => {
    return (
        <>
            <label className='mb-1 text-xs'>{title}</label>
            <input className='mb-1 h-[30px] pl-4 w-full text-xs leading-5 bg-gray-800 rounded-[5px] border-2 border-gray-700' type="text" placeholder={placeHolder} />
        </>
    )
}

export default TaskInput