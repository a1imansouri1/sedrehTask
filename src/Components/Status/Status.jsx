import React from 'react'
import { Icon } from '@iconify/react';
import circleIcon from '@iconify/icons-material-symbols/circle';

const Status = ({ title, color, toDoQuant }) => {
    return (
        <div className='flex items-center gap-x-2 mt-[10px] mb-[30px] ml-[20px]'>
            <div>
                <Icon icon={circleIcon} color={color} height='25px' />
            </div>
            <span>
                {title}
            </span>
            <span>{toDoQuant}</span>
        </div>
    )
}

export default Status