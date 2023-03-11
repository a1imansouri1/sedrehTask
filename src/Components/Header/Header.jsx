import React from 'react'

import { Icon } from '@iconify/react';
import overflowMenuVertical from '@iconify/icons-carbon/overflow-menu-vertical';

const Header = ({title, children}) => {
    return (

        <>
            <div className='mb-5 flex items-center justify-between float-right border-b-2 border-b-violet-300 mt-0 h-32 w-10/12 bg-gray-800 text-white'>
                <h1 className="text-2xl font-bold text-gray-200 ml-10">{title}</h1>
                <div className='flex items-center mr-10'>
                    <button className="text-xl mr-5 text-gray-200 w-[200px] p-2.5 rounded-full bg-violet-500 text-white">+Add New Task</button>
                    <Icon icon={overflowMenuVertical} color="white" height='35' />
                </div>
            </div>
            <div className='h-screen bg-stone-900'>
                {children}
            </div>
            
        </>
    )
}

export default Header