import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import '../../styles/styles.css'
import TitleInput from '../Inputs/TitleInput';
import SubTaskInput from '../Inputs/SubTaskInput'
import { useDispatch, useSelector } from 'react-redux'
import { taskActions } from '../../Store/taskSlice'

const AddNewTask = ({ closeModal }) => {

    const [title, setTitle] = useState('')

    const [subTask, setSubTask] = useState([
        { subTaskKey: '', subTaskStatusKey: '' }
    ])

    const [status, setStatus] = useState('Todo')

    const [description, setDescription] = useState('')

    const addNewSubTask = () => {
        setSubTask([...subTask, { subTaskKey: '', subTaskStatusKey: '' }])
    }
    const removeNewSubTask = (index) => {
        const list = [...subTask]
        list.splice(index, 1)
        setSubTask(list)
    }

    const dispatch = useDispatch()

    const addNewTask = () => {
        dispatch(taskActions.addNewTask({ title, subTask, status, description }))
    }


    return (
        <div className='fixed z-10 left-0 top-0 w-full h-full'>

            <div className='w-full h-full' onClick={closeModal}>
            </div>

            <div className='absolute w-[400px] top-[150px] left-[500px] p-5 box-border rounded-[10px] border-none bg-blue-100 dark:bg-gray-800'>

                <h1 className='text-left font-bold mb-[10px]'>Add New Task</h1>

                <TitleInput label='Title' title={title} setTitle={setTitle} placeHolder='e.g. Take coffee break' />

                <label className='text-xs'>Description</label>
                <textarea cols='30' rows='4'
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    placeholder="e.g. It's always good to take a break. This 15 minutes break will recharge the batteries a little"
                    className='text-xs leading-5 p-4 rounded-[5px] w-full border-2 bg-blue-200 dark:bg-gray-800 dark:border-gray-700'
                >
                </textarea>

                <label className='mb-1 text-xs'>Subtasks</label>
                {
                    subTask.map((item, index) => {
                        return (
                            <SubTaskInput key={index} subTask={subTask} setSubTask={setSubTask} index={index} removeNewSubTask={removeNewSubTask} />
                        )
                    })
                }

                <button
                    className="font-bold text-[10px] h-[40px] mt-3 text-gray-200 w-full align-middle rounded-full  text-violet-500 bg-white hover:bg-violet-500 hover:text-white duration:300"
                    onClick={addNewSubTask}
                >+Add New Subtask</button>

                <label className='block text-xs mt-[15px] mb-1'>Status</label>
                <select
                    value={status}
                    onChange={e => setStatus(e.target.value)}
                    id='status' className='text-xs pl-3 h-[30px] cursor-pointer w-full rounded-[5px] bg-blue-200 dark:bg-gray-800 border-2 dark:border-gray-700 dark:text-gray-400'>
                    <option value="Todo">Todo</option>
                    <option value="Doing">Doing</option>
                    <option value="Done">Done</option>
                </select>

                <button
                    className="font-bold text-[10px] h-[40px] mt-3 text-gray-200 w-full align-middle rounded-full  hover:text-violet-500 hover:bg-white bg-violet-500 text-white duration:300"
                    onClick={addNewTask}
                >Create Task</button>

            </div>

        </div >
    )
}

export default AddNewTask