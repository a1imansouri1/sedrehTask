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


        checked(state, action) {

            const index1 = action.payload.index1
            const index = action.payload.index
            const abc = state.taskItems
            const abcd = abc[index1].subTask
            abcd[index].subTaskStatusKey = true
            const abcde = abc.map((item, index2) => index2 == index1 ? { ...item, subTask: abcd } : item)
            
            setItemFunc(abcde)

        },

        notChecked(state, action) {

            const index1 = action.payload.index1
            const index = action.payload.index
            const abc = state.taskItems
            const abcd = abc[index1].subTask
            abcd[index].subTaskStatusKey = false
            const abcde = abc.map((item, index2) => index2 == index1 ? { ...item, subTask: abcd } : item)

            setItemFunc(abcde)

        },



        subTasksNumber(state, action) {

        }

    }
})

export const taskActions = taskSlice.actions
export default taskSlice