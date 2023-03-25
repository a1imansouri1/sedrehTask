import React from 'react'
import { Icon } from '@iconify/react';
import spaceDashboardRounded from '@iconify/icons-material-symbols/space-dashboard-rounded';

const SideBarButtons = ({ name }) => {
    return (
        <div
            className="w-11/12 p-2.5 my-2 flex items-center rounded-r-full cursor-pointer hover:bg-violet-500 hover:text-gray-200 dark:text-gray-200"
        >
            < Icon icon={spaceDashboardRounded} className='dark:text-white' />
            <span className="text-[15px] ml-4 font-bold">{name}</span>
        </div>
    )
}

export default SideBarButtons