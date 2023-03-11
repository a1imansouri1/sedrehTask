import { createSlice } from "@reduxjs/toolkit";

const addNewTaskSlice = createSlice({
    name: 'addNewTask',
    initialState: { addNewTaskIsVisible: false },

    reducers: {
        toggle(state) {
            state.addNewTaskIsVisible = !state.addNewTaskIsVisible
        }
    }
})

export const addNewTaskActions = addNewTaskSlice.actions
export default addNewTaskSlice