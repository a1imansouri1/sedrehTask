import React from 'react'
import { Icon } from '@iconify/react';
import spaceDashboardRounded from '@iconify/icons-material-symbols/space-dashboard-rounded';

const SideBarButtons = ({ name }) => {
    return (
        <div
            className="w-11/12 p-2.5 my-2 flex items-center rounded-r-full duration-300 cursor-pointer hover:bg-violet-500 text-white"
        >
            < Icon icon={spaceDashboardRounded} color="white" />
            <span className="text-[15px] ml-4 text-gray-200 font-bold">{name}</span>
        </div>
    )
}

export default SideBarButtons