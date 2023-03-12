import React from 'react'
import { Icon } from '@iconify/react';
import circleIcon from '@iconify/icons-material-symbols/circle';

const Status = ({ title, color, toDoQuant }) => {
    return (
        <div className='flex items-center gap-x-2 mb-[30px] ml-[5px]'>
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