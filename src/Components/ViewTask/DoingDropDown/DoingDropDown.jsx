import { taskActions } from '../../../Store/taskSlice';
import { useDispatch } from 'react-redux';

const DoingDropDown = ({ index1, title, description, subTask }) => {

  const dispatch = useDispatch()

  const changeStatus = (e) => {
    const statuss = e.target.value
    if (statuss == 'Todo') {
      dispatch(taskActions.toDoChangeStatusDoing({
        title, description, subTask
        , index1
      }))
    } else if (statuss == 'Done') {
      dispatch(taskActions.doneChangeStatusDoing({
        title, description, subTask
        , index1
      }))
    }
  }

  return (

    <select
      onChange={changeStatus}
      className='text-xs pl-3 h-[30px] cursor-pointer w-full rounded-[5px] bg-gray-800 border-2 border-gray-700 text-gray-400'>
      <option value="Doing">Doing</option>
      <option value="Todo">Todo</option>
      <option value="Done">Done</option>
    </select>

  );
}

export default DoingDropDown;