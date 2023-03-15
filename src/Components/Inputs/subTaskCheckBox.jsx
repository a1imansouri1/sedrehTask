import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { taskActions } from '../../Store/taskSlice'
import { Icon } from '@iconify/react';
import checkBox from '@iconify/icons-material-symbols/check-box';
import checkBoxOutlineBlank from '@iconify/icons-material-symbols/check-box-outline-blank';

const SubTaskCheckBox = ({ status, index1, index, subTaskStatusKeyValue, subTaskKeyValue }) => {

    const dispatch1 = useDispatch()
    const dispatch2 = useDispatch()
    const dispatch3 = useDispatch()
    // const checked = () => {
    //     dispatch(taskActions.checked({ index1, index }, { index1, index }, { index1, index }))
    // }
    // const notChecked = () => {
    //     dispatch(taskActions.notChecked({ index1, index }))
    // }

    const checkedTodo = () => {
        dispatch1(taskActions.checkedTodo({ index1, index }))
        console.log(status)
    }
    const checkedDoing = () => {
        dispatch2(taskActions.checkedDoing({ index1, index }))
        console.log(status)
    }
    const checkedDone = () => {
        dispatch3(taskActions.checkedDone({ index1, index }))
        console.log(status)
    }

    const notCheckedTodo = () => {
        dispatch1(taskActions.notCheckedTodo({ index1, index }))
        console.log(status)
    }
    const notCheckedDoing = () => {
        dispatch2(taskActions.notCheckedDoing({ index1, index }))
        console.log(status)
    }
    const notCheckedDone = () => {
        dispatch3(taskActions.notCheckedDone({ index1, index }))
        console.log(status)
    }

    return (
        < div className='mb-2 flex gap-1 items-center p-3 box-border rounded-[10px] border-none bg-gray-900'>
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
                            <Icon icon={checkBox} color="#8b5cf6" />
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
                                    <Icon icon={checkBox} color="#8b5cf6" />
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
                                    <Icon icon={checkBox} color="#8b5cf6" />
                                    <p className='text-[10px] line-through text-gray-400'> {subTaskKeyValue}</p>
                                </div>)
                        )

            }
        </div>
    )
}

export default SubTaskCheckBox