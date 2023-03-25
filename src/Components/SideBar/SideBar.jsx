import React, { useRef } from 'react'
import SideBarButtons from './SideBarButtons'

import { Icon } from '@iconify/react';
import threeLineVertical from '@iconify/icons-akar-icons/three-line-vertical';
import lightMode from '@iconify/icons-material-symbols/light-mode';
import toggleOn from '@iconify/icons-material-symbols/toggle-on';
import toggleOff from '@iconify/icons-material-symbols/toggle-off';
import moonFill from '@iconify/icons-akar-icons/moon-fill';

import { NavLink, Link, useNavigate } from 'react-router-dom'
import useDarkMode from '../../Hook/useDarkMode';

const SideBar = () => {

    const menuRef = useRef(null);
    const sideBarRef = useRef(null);
    const toggleMenu = () => menuRef.current.classList.toggle('show_menu')

    const [colorTheme, setTheme] = useDarkMode()

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
            className="sidebar  bg-white border-r-2 border-r-violet-300  fixed top-0 bottom-0 lg:left-0 pl-0 p-2 w-2/12 overflow-y-auto text-center dark:bg-gray-800"
            ref={sideBarRef}
        >

            <div>
                <div className="p-2.5 mt-8 flex items-center">
                    <Icon icon={threeLineVertical} color="#8b5cf6" height='30' />
                    <h1 className="text-2xl font-bold dark:text-gray-200 ml-3">kanban</h1>
                </div>
            </div>

            <div>
                <div className="mt-10 flex items-center">
                    <h2 className="text-[15px] dark:text-gray-200 ml-3">ALL BOARDS (8)</h2>
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
            {
                colorTheme === "dark" ?
                    <div className='flex ml-2 rounded-[5px] gap-[30px] justify-center items-center bg-violet-500 mt-[250px]'>
                        <Icon icon={lightMode} color="#FBBF24" />
                        <Icon onClick={() => setTheme(colorTheme)} icon={toggleOff} height='30px' color='white' className='cursor-pointer' />
                        <Icon icon={moonFill} color="white" />
                    </div>
                    :
                    <div className='flex ml-2 rounded-[5px] gap-[30px] justify-center items-center bg-stone-900 mt-[250px]'>
                        <Icon icon={lightMode} color='white' />
                        <Icon onClick={() => setTheme(colorTheme)} icon={toggleOn} color="white" height='30px' className='cursor-pointer' />
                        <Icon icon={moonFill} color="#FBBF24" />
                    </div>
            }
        </div>
    )
}

export default SideBar