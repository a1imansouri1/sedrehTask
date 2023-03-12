import React, { useRef } from 'react'
import SideBarButtons from './SideBarButtons'

import { Icon } from '@iconify/react';
import threeLineVertical from '@iconify/icons-akar-icons/three-line-vertical';
import lightMode from '@iconify/icons-material-symbols/light-mode';
import toggleOn from '@iconify/icons-material-symbols/toggle-on';
import moonFill from '@iconify/icons-akar-icons/moon-fill';

import { NavLink, Link, useNavigate } from 'react-router-dom'

const SideBar = () => {

    const menuRef = useRef(null);
    const sideBarRef = useRef(null);
    const toggleMenu = () => menuRef.current.classList.toggle('show_menu')

    const navLinks = [
        {
            navId: 1,
            display: 'Platform Launch',
            path: '/platformlaunch'
        },
        {
            navId: 2,
            display: 'Marketting Plan',
            path: '/markettingplan'
        },
        {
            navId: 3,
            display: 'Roadmap',
            path: '/roadmap'
        },
        {
            navId: 4,
            display: '+Create New Board',
            path: '/createnewboard'
        },
    ]

    return (


        <div
            className="sidebar border-r-2 border-r-violet-300  fixed top-0 bottom-0 lg:left-0 pl-0 p-2 w-2/12 overflow-y-auto text-center bg-gray-800"
            ref={sideBarRef}
        >

            <div>
                <div className="p-2.5 mt-8 flex items-center">
                    <Icon icon={threeLineVertical} color="#8b5cf6" height='30' />
                    <h1 className="text-2xl font-bold text-gray-200 ml-3">kanban</h1>
                </div>
            </div>

            <div>
                <div className="mt-10 flex items-center">
                    <h2 className="text-[15px] text-gray-200 ml-3">ALL BOARDS (8)</h2>
                </div>
            </div>

            <div>
                <div ref={menuRef} onClick={toggleMenu}>

                    {
                        navLinks.map((item, navId) => (
                            <NavLink to={item.path} key={navId}
                                className={navClass => navClass.isActive ? "w-11/12 flex my-3 bg-violet-500 rounded-r-full text-white" : ""}>
                                <SideBarButtons name={item.display} />
                            </NavLink>
                        ))
                    }

                </div>
            </div>

            <div className='flex w-full gap-[30px] justify-center items-center'>
                <Icon icon={lightMode} color="white" />
                <Icon icon={toggleOn} color="rgb(139 92 246)" height='25px' />
                <Icon icon={moonFill} color="white" />
            </div>



        </div>
    )
}

export default SideBar