import React, { useState } from 'react'
import AddNewTask from '../AddNewTask/AddNewTask';

import { Icon } from '@iconify/react';
import overflowMenuVertical from '@iconify/icons-carbon/overflow-menu-vertical';

const Header = ({ title, children }) => {

    const [openModal, setOpenModal] = useState(false)
    const open = () => setOpenModal(true)
    const close = () => setOpenModal(false)

    return (

        <div className='flex'>
            <div className=' bg-white lg:right-0 fixed mb-5 flex items-center justify-between border-b-2 border-b-violet-300 mt-0 h-32 w-10/12 dark:bg-gray-800'>
                <h1 className="text-2xl font-bold dark:text-gray-200 ml-10">{title}</h1>
                <div className='flex items-center mr-10'>
                    <button className="text-xl mr-5 text-gray-200 w-[200px] p-2.5 rounded-full bg-violet-500 text-white hover:text-white hover:bg-violet-900 hover:dark:bg-white hover:dark:text-violet-500 duration:300" onClick={open}>+Add New Task</button>

                    {
                        openModal ?
                            <AddNewTask closeModal={close} />
                            :
                            ""
                    }

                    <Icon icon={overflowMenuVertical} className='dark:text-white' height='35' />
                </div>
            </div>
            <div className='h-full mt-[128px] dark:bg-stone-900'>
                {children}
            </div>

        </div>
    )
}

export default Header