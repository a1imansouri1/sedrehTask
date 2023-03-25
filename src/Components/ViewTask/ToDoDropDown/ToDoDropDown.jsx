import { taskActions } from '../../../Store/taskSlice';
import { useDispatch } from 'react-redux';

const ToDoDropDown = ({ index1, title, description, subTask }) => {

  const dispatch = useDispatch()

  const changeStatus = (e) => {
    const statuss = e.target.value
    if (statuss == 'Doing') {
      dispatch(taskActions.doingChangeStatusTodo({
        title, description, subTask
        , index1
      }))
    } else if (statuss == 'Done') {
      dispatch(taskActions.doneChangeStatusTodo({
        title, description, subTask
        , index1
      }))
    }
  }

  return (

    <select
      onChange={changeStatus}
      className='text-xs pl-3 h-[30px] cursor-pointer w-full rounded-[5px] dark:bg-gray-800 bg-blue-200 border-2 dark:border-gray-700 dark:text-gray-400'>
      <option value="Todo">Todo</option>
      <option value="Doing">Doing</option>
      <option value="Done">Done</option>
    </select>

  );
}

export default ToDoDropDown;