import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { taskActions } from '../../Store/taskSlice'
import { Icon } from '@iconify/react';
import checkBox from '@iconify/icons-material-symbols/check-box';
import checkBoxOutlineBlank from '@iconify/icons-material-symbols/check-box-outline-blank';

const SubTaskCheckBox = ({ status, index1, index, subTaskStatusKeyValue, subTaskKeyValue }) => {

    const dispatch = useDispatch()
   
    const checkedTodo = () => {
        dispatch(taskActions.checkedTodo({ index1, index }))
        console.log(status)
    }
    const checkedDoing = () => {
        dispatch(taskActions.checkedDoing({ index1, index }))
        console.log(status)
    }
    const checkedDone = () => {
        dispatch(taskActions.checkedDone({ index1, index }))
        console.log(status)
    }

    const notCheckedTodo = () => {
        dispatch(taskActions.notCheckedTodo({ index1, index }))
        console.log(status)
    }
    const notCheckedDoing = () => {
        dispatch(taskActions.notCheckedDoing({ index1, index }))
        console.log(status)
    }
    const notCheckedDone = () => {
        dispatch(taskActions.notCheckedDone({ index1, index }))
        console.log(status)
    }

    return (
        < div className='mb-2 flex gap-1 items-center p-3 box-border rounded-[10px] border-none dark:bg-gray-900 bg-blue-200'>
            {
                status == 'Todo' ?
                    (!subTaskStatusKeyValue ?
                        <div onClick={checkedTodo}
                            className='flex gap-[10px] cursor-pointer'>
                            <Icon icon={checkBoxOutlineBlank} />
                            <p className='text-[10px]'>{subTaskKeyValue}</p>
                        </div>
                        :
                        <div onClick={notCheckedTodo} className='flex gap-[10px] cursor-pointer'>
                            <Icon icon={checkBox} className='dark:text-violet-500 text-violet-700' />
                            <p className='text-[10px] line-through text-gray-400'> {subTaskKeyValue}</p>
                        </div>)
                    :
                    status == 'Doing' ?
                        (
                            (!subTaskStatusKeyValue ?
                                <div onClick={checkedDoing}
                                    className='flex gap-[10px] cursor-pointer'>
                                    <Icon icon={checkBoxOutlineBlank} />
                                    <p className='text-[10px]'>{subTaskKeyValue}</p>
                                </div>
                                :
                                <div onClick={notCheckedDoing} className='flex gap-[10px] cursor-pointer'>
                                    <Icon icon={checkBox} className='dark:text-violet-500 text-violet-700' />
                                    <p className='text-[10px] line-through text-gray-400'> {subTaskKeyValue}</p>
                                </div>)
                        )
                        :
                        (
                            (!subTaskStatusKeyValue ?
                                <div onClick={checkedDone}
                                    className='flex gap-[10px] cursor-pointer'>
                                    <Icon icon={checkBoxOutlineBlank} />
                                    <p className='text-[10px]'>{subTaskKeyValue}</p>
                                </div>
                                :
                                <div onClick={notCheckedDone} className='flex gap-[10px] cursor-pointer'>
                                    <Icon icon={checkBox} className='dark:text-violet-500 text-violet-700' />
                                    <p className='text-[10px] line-through text-gray-400'> {subTaskKeyValue}</p>
                                </div>)
                        )

            }
        </div>
    )
}

export default SubTaskCheckBox