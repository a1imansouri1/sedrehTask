import { taskActions } from '../../../Store/taskSlice';
import { useDispatch } from 'react-redux';

const DoneDropDown = ({ index1, title, description, subTask }) => {

  const dispatch = useDispatch()

  const changeStatus = (e) => {
    const statuss = e.target.value
    if (statuss == 'Todo') {
      dispatch(taskActions.toDoChangeStatusDone({
        title, description, subTask
        , index1
      }))
    } else if (statuss == 'Doing') {
      dispatch(taskActions.doingChangeStatusDone({
        title, description, subTask
        , index1
      }))
    }
  }

  return (

    <select
      onChange={changeStatus}
      className='text-xs pl-3 h-[30px] cursor-pointer w-full rounded-[5px] bg-gray-800 border-2 border-gray-700 text-gray-400'>
      <option value="Done">Done</option>
      <option value="Todo">Todo</option>
      <option value="Doing">Doing</option>
    </select>

  );
}

export default DoneDropDown;