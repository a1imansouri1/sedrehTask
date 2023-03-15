import React, { useState, useEffect } from 'react'
import '../../styles/styles.css'
import SubTaskCheckBox from '../Inputs/subTaskCheckBox';

import { Icon } from '@iconify/react';
import overflowMenuVertical from '@iconify/icons-carbon/overflow-menu-vertical';

import { taskActions } from '../../Store/taskSlice';
import { useDispatch } from 'react-redux';

const ViewTask = ({ index1, closeModal, title, description, subTask, status, checkedSubTaskNum }) => {

    const [status1, setStatus1] = useState(status)

    const dispatch = useDispatch()

    const changeStatus = (e) => {
        const statuss = e.target.value
        if (statuss == 'Todo' ) {
            dispatch(taskActions.toDoChangeStatus({
                title, description, subTask, status,
                index1
            }))
        } else if (statuss == 'Doing') {
            dispatch(taskActions.doingChangeStatus({
                title, description, subTask, status,
                index1
            }))
        } else if (statuss == 'Done') {
            dispatch(taskActions.doneChangeStatus({
                title, description, subTask, status,
                index1
            }))
        }
    }
    const doingChangeStatus = (e) => {
        const status = e.target.value
        if (status == 'Doing') {
            dispatch(taskActions.doingChangeStatus({
                title, description, subTask, status,
                index1
            }))
        }
    }
    const doneChangeStatus = (e) => {
        const status = e.target.value
        if (status == 'Done') {
            dispatch(taskActions.doneChangeStatus({
                title, description, subTask, status,
                index1
            }))
        }
    }

    return (
        <div className='fixed z-10 left-0 top-0 w-full h-full'>

            <div className='w-full h-full' onClick={closeModal}>
            </div>

            <div className='absolute w-[400px] top-[150px] left-[500px] p-5 box-border rounded-[10px] border-none bg-gray-800'>
                <div className='flex justify-between'>
                    <h1 className='text-left font-bold mb-[20px]'>
                        {title}
                    </h1>
                    <Icon icon={overflowMenuVertical} color="rgb(148 163 184)" height='25' />
                </div>

                <p className='text-[12px]  text-gray-400'>
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
                {/* {

                    status == 'Todo' ?
                        <div>
                            <button onClick={doingChangeStatus}>doingchangeStatus</button>
                            <button onClick={doneChangeStatus}>doneChangeStatus</button>
                        </div>
                        :
                        status == 'Doing' ?
                            <div>
                                <button onClick={toDoChangeStatus}>toDochangeStatus</button>
                                <button onClick={doneChangeStatus}>doneChangeStatus</button>

                            </div>
                            :
                            <div>
                                <button onClick={toDoChangeStatus}>toDochangeStatus</button>
                                <button onClick={doingChangeStatus}>doingchangeStatus</button>
                            </div>
                } */}

                <label className='block text-xs mt-[15px] mb-1'>Status</label>
                {
                    status == 'Todo' ?

                        (

                            <select
                                // value={status1}
                                onChange={changeStatus}
                                className='text-xs pl-3 h-[30px] cursor-pointer w-full rounded-[5px] bg-gray-800 border-2 border-gray-700 text-gray-400'>
                                <option value="Todo">Todo</option>
                                <option value="Doing">Doing</option>
                                <option value="Done">Done</option>
                            </select>
                        )
                        :
                        status == 'Doing' ?
                            (
                                <select
                                    // value={status1}
                                    onChange={changeStatus}
                                    className='text-xs pl-3 h-[30px] cursor-pointer w-full rounded-[5px] bg-gray-800 border-2 border-gray-700 text-gray-400'>
                                    <option value="Doing">Doing</option>
                                    <option value="Todo">Todo</option>
                                    <option value="Done">Done</option>
                                </select>
                            )
                            :
                            (
                                <select
                                    // value={status1}
                                    onChange={changeStatus}
                                    className='text-xs pl-3 h-[30px] cursor-pointer w-full rounded-[5px] bg-gray-800 border-2 border-gray-700 text-gray-400'>
                                    <option value="Done">Done</option>
                                    <option value="Todo">Todo</option>
                                    <option value="Doing">Doing</option>
                                </select>
                            )

                }

            </div>

        </div >
    )
}

export default ViewTask