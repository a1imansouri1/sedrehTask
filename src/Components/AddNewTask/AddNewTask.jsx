import React from 'react'
import { useForm } from "react-hook-form";
import '../../styles/styles.css'
import TaskInput from '../Input/TaskInput';

const AddNewTask = ({ closeModal }) => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='fixed z-10 left-0 top-0 w-full h-full'>

            <div className='w-full h-full' onClick={closeModal}>
            </div>

            <div className='absolute w-[400px] top-[150px] left-[500px] p-5 box-border rounded-[10px] border-none bg-gray-800'>
                <h1 className='text-left font-bold mb-[10px]'>Add New Task</h1>
                <TaskInput title='Title' placeHolder='e.g. Take coffee break' />

                <label className='text-xs'>Description</label>
                <textarea cols='30' rows='4'
                    placeHolder="e.g. It's always good to take a break. This 15 minutes break will recharge the batteries a little"
                    className='text-xs leading-5 p-4 rounded-[5px] w-full bg-gray-800 border-2 border-gray-700'
                >
                </textarea>

                <TaskInput title='Subtasks' placeHolder='e.g. Make coffee' />
                <TaskInput title='' placeHolder='e.g. Make coffee' />
                <button className="font-bold text-[10px] h-[40px] mt-3 text-gray-200 w-full align-middle rounded-full  text-violet-500 bg-white hover:bg-violet-500 hover:text-white duration:300" >+Add New Subtask</button>

                <label className='block text-xs mt-[15px] mb-1'>Status</label>
                <select className='text-xs pl-3 h-[30px] cursor-pointer w-full rounded-[5px] bg-gray-800 border-2 border-gray-700 text-gray-400'>
                    <option value="female">Todo</option>
                    <option value="male">Doing</option>
                    <option value="other">Done</option>
                </select>

                <button className="font-bold text-[10px] h-[40px] mt-3 text-gray-200 w-full align-middle rounded-full  hover:text-violet-500 hover:bg-white bg-violet-500 text-white duration:300" >Create Task</button>

            </div>

        </div >
    )
}

export default AddNewTask