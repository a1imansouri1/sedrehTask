import React, { useState } from 'react'


const TaskInput = ({ label, title, setTitle, placeHolder }) => {


    return (
        <>
            <label className='mb-1 text-xs'>{label}</label>
            <input
                className='mb-1 h-[30px] pl-4 w-full text-xs leading-5 bg-gray-800 rounded-[5px] border-2 border-gray-700'
                type="text" placeholder={placeHolder}
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            
        </>
    )
}

export default TaskInput