import React, { useState, useEffect } from 'react'
import '../../styles/styles.css'
import SubTaskCheckBox from '../Inputs/subTaskCheckBox';

import { Icon } from '@iconify/react';
import overflowMenuVertical from '@iconify/icons-carbon/overflow-menu-vertical';

import ToDoDropDown from './ToDoDropDown/ToDoDropDown';
import DoingDropDown from './DoingDropDown/DoingDropDown';
import DoneDropDown from './DoneDropDown/DoneDropDown';

const ViewTask = ({ index1, closeModal, title, description, subTask, status, checkedSubTaskNum }) => {

    return (
        <div className='fixed z-10 left-0 top-0 w-full h-full'>

            <div className='w-full h-full' onClick={closeModal}>
            </div>

            <div className='absolute w-[400px] top-[150px] left-[500px] p-5 box-border rounded-[10px] border-none dark:bg-gray-800 bg-blue-100'>
                <div className='flex justify-between'>
                    <h1 className='text-left font-bold mb-[20px]'>
                        {title}
                    </h1>
                    <Icon icon={overflowMenuVertical} color="rgb(148 163 184)" height='25' />
                </div>

                <p className='text-[12px]  dark:text-gray-400'>
                    {description}
                </p>

                <label className='block mb-3 mt-3 text-xs'>

                    Subtasks {checkedSubTaskNum} of {subTask.length}

                </label>

                {
                    subTask.map((item, index) => {
                        return (
                            <SubTaskCheckBox status={status} key={index} index1={index1} index={index} subTask={subTask} subTaskKeyValue={item.subTaskKey} subTaskStatusKeyValue={item.subTaskStatusKey} checkedSubTaskNum={checkedSubTaskNum} />
                        )
                    })
                }

                <label className='block text-xs mt-[15px] mb-1'>Status</label>
                {
                    status == 'Todo' ?
                        <ToDoDropDown index1={index1} title={title} description={description} subTask={subTask} />
                        :
                        status == 'Doing' ?
                            <DoingDropDown index1={index1} title={title} description={description} subTask={subTask} />
                            :
                            <DoneDropDown index1={index1} title={title} description={description} subTask={subTask} />
                }


            </div>

        </div >
    )
}

export default ViewTask