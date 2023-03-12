import { createSlice } from "@reduxjs/toolkit";

const items =
    localStorage.getItem("taskItems") !== null
        ? JSON.parse(localStorage.getItem("taskItems"))
        : [];

const setItemFunc = (item) => {
    localStorage.setItem("taskItems", JSON.stringify(item));
};

const initialState = {
    taskItems: items,
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
            })

            setItemFunc(
                state.taskItems.map((item) => item)
            )

        },

        subTasksNumber(state, action){
            
        }

    }
})

export const taskActions = taskSlice.actions
export default taskSlice