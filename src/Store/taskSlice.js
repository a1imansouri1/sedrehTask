import { createSlice } from "@reduxjs/toolkit";

const items =
    localStorage.getItem("taskItems") !== null
        ? JSON.parse(localStorage.getItem("taskItems"))
        : [];

const newItemCheckedSubTaskNumItems =
    localStorage.getItem("newItemCheckedSubTaskNumItems") !== null
        ? JSON.parse(localStorage.getItem("newItemCheckedSubTaskNumItems"))
        : [];

const setItemFunc = (item) => {
    localStorage.setItem("taskItems", JSON.stringify(item));
};
const setItemFuncnewItemCheckedSubTaskNumItems = (item) => {
    localStorage.setItem("newItemCheckedSubTaskNumItems", JSON.stringify(newItemCheckedSubTaskNumItems));
};

const initialState = {
    taskItems: items,
    newItemCheckedSubTaskNumItems: newItemCheckedSubTaskNumItems,
}

const taskSlice = createSlice({
    name: 'task',
    initialState: initialState,

    reducers: {

        addNewTask(state, action) {

            const newItem = action.payload

            state.taskItems.push({
                title: newItem.title,
                description: newItem.description,
                subTask: newItem.subTask,
                status: newItem.status,
                checkedSubTaskNum: newItem.checkedSubTaskNum,
            })

            setItemFunc(
                state.taskItems.map((item) => item)
            )

        },
        checkedSubTaskNum(state, action) {
            const newItemCheckedSubTaskNum = action.payload

            state.taskItems.push({
                title: newItemCheckedSubTaskNum.title,
                description: newItemCheckedSubTaskNum.description,
                subTask: newItemCheckedSubTaskNum.subTask,
                status: newItemCheckedSubTaskNum.status,
                checkedSubTaskNum: newItemCheckedSubTaskNum.checkedSubTaskNum,
            })

            setItemFuncnewItemCheckedSubTaskNumItems(
                state.newItemCheckedSubTaskNumItems.map((item) => item)
            )
        },

        subTasksNumber(state, action) {

        }

    }
})

export const taskActions = taskSlice.actions
export default taskSlice