import React from 'react'
import { useForm } from "react-hook-form";
import '../../styles/styles.css'

import { Icon } from '@iconify/react';
import overflowMenuVertical from '@iconify/icons-carbon/overflow-menu-vertical';


const ViewTask = ({ closeModal }) => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='fixed z-10 left-0 top-0 w-full h-full'>

            <div className='w-full h-full' onClick={closeModal}>
            </div>

            <div className='absolute w-[400px] top-[150px] left-[500px] p-5 box-border rounded-[10px] border-none bg-gray-800'>
                <div className='flex'>
                    <h1 className='text-left font-bold mb-[20px]'>Research pricing points of various competitors and trial different business models</h1>
                    <Icon icon={overflowMenuVertical} color="white" height='45' />
                </div>

                <p className='text-[12px]  text-gray-400'>
                    We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.
                </p>

                <label className='block mb-3 mt-3 text-xs'>
                    Subtasks (2 of 3)
                </label>
                <div className='mb-2 flex gap-1 items-center p-3 box-border rounded-[10px] border-none bg-gray-900'>
                    <input className='w-4 h-4 cursor-pointer' type="checkbox" />
                    <label className='text-[10px]'>Research competitor pricing and business models</label>
                </div>
                <div className='mb-2 flex gap-1 items-center p-3 box-border rounded-[10px] border-none bg-gray-900'>
                    <input className='w-4 h-4 cursor-pointer' type="checkbox" placeholder='Outline a business model that works for our solution' />
                    <label className='text-[10px]'>Outline a business model that works for our solution</label>
                </div>
                <div className='mb-2 flex gap-1 items-center p-3 box-border rounded-[10px] border-none bg-gray-900'>
                    <input className='w-5 h-5 cursor-pointer' type="checkbox" placeholder='Outline a business model that works for our solution' />
                    <label className='text-[10px]'>Talk to potential customers about our proposed solution and ask for fair price expentancy</label>
                </div>

                <label className='block text-xs mt-[15px] mb-1'>Status</label>
                <select className='text-xs pl-3 h-[30px] cursor-pointer w-full rounded-[5px] bg-gray-800 border-2 border-gray-700 text-gray-400'>
                    <option value="female">Todo</option>
                    <option value="male">Doing</option>
                    <option value="other">Done</option>
                </select>
            </div>

        </div >
    )
}

export default ViewTask