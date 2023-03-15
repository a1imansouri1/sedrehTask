import { createSlice } from "@reduxjs/toolkit";

const items =
    localStorage.getItem("taskItems") !== null
        ? JSON.parse(localStorage.getItem("taskItems"))
        : [];
const items1 =
    localStorage.getItem("toDOTaskItems") !== null
        ? JSON.parse(localStorage.getItem("toDOTaskItems"))
        : [];
const items2 =
    localStorage.getItem("doingTaskItems") !== null
        ? JSON.parse(localStorage.getItem("doingTaskItems"))
        : [];
const items3 =
    localStorage.getItem("doneTaskItems") !== null
        ? JSON.parse(localStorage.getItem("doneTaskItems"))
        : [];

const setItemFunc = (item
    , item1, item2, item3
) => {
    localStorage.setItem("taskItems", JSON.stringify(item));
    localStorage.setItem("toDOTaskItems", JSON.stringify(item1));
    localStorage.setItem("doingTaskItems", JSON.stringify(item2));
    localStorage.setItem("doneTaskItems", JSON.stringify(item3));
};

const initialState = {
    taskItems: items,
    toDOTaskItems: items1,
    doingTaskItems: items2,
    doneTaskItems: items3,
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

            state.toDOTaskItems = state.taskItems.filter(item => item.status == 'Todo')
            state.doingTaskItems = state.taskItems.filter(item => item.status == 'Doing')
            state.doneTaskItems = state.taskItems.filter(item => item.status == 'Done')

            setItemFunc(
                state.taskItems.map((item) => item)
                , state.toDOTaskItems.map((item) => item),
                state.doingTaskItems.map((item) => item),
                state.doneTaskItems.map((item) => item),
            )

        },


        checkedTodo(state, action) {

            const index1 = action.payload.index1
            const index = action.payload.index
            const abc = state.toDOTaskItems
            const abcd = abc[index1].subTask
            abcd[index].subTaskStatusKey = true

            const abcde = abc.map((item, index2) => index2 == index1 ? { ...item, subTask: abcd } : item)
            const x = abcde.filter(item => item.status == 'Todo')
            state.toDOTaskItems = x
            localStorage.setItem("toDOTaskItems", JSON.stringify(
                state.toDOTaskItems.map(item => item)
            ));
        },

        checkedDoing(state, action) {

            const index1 = action.payload.index1
            const index = action.payload.index
            const abc = state.doingTaskItems
            const abcd = abc[index1].subTask
            abcd[index].subTaskStatusKey = true

            const abcde = abc.map((item, index2) => index2 == index1 ? { ...item, subTask: abcd } : item)
            const x = abcde.filter(item => item.status == 'Doing')
            state.doingTaskItems = x
            localStorage.setItem("doingTaskItems", JSON.stringify(
                state.doingTaskItems.map(item => item)
            ));
        },

        checkedDone(state, action) {

            const index1 = action.payload.index1
            const index = action.payload.index
            const abc = state.doneTaskItems
            const abcd = abc[index1].subTask
            abcd[index].subTaskStatusKey = true

            const abcde = abc.map((item, index2) => index2 == index1 ? { ...item, subTask: abcd } : item)
            const x = abcde.filter(item => item.status == 'Done')
            state.doneTaskItems = x
            localStorage.setItem("doneTaskItems", JSON.stringify(
                state.doneTaskItems.map(item => item)
            ));
        },

        notCheckedTodo(state, action) {

            const index1 = action.payload.index1
            const index = action.payload.index
            const abc = state.toDOTaskItems
            const abcd = abc[index1].subTask
            abcd[index].subTaskStatusKey = false

            const abcde = abc.map((item, index2) => index2 == index1 ? { ...item, subTask: abcd } : item)
            const x = abcde.filter(item => item.status == 'Todo')
            state.toDOTaskItems = x
            localStorage.setItem("toDOTaskItems", JSON.stringify(
                state.toDOTaskItems.map(item => item)
            ));
        },

        notCheckedDoing(state, action) {

            const index1 = action.payload.index1
            const index = action.payload.index
            const abc = state.doingTaskItems
            const abcd = abc[index1].subTask
            abcd[index].subTaskStatusKey = false

            const abcde = abc.map((item, index2) => index2 == index1 ? { ...item, subTask: abcd } : item)
            const x = abcde.filter(item => item.status == 'Doing')
            state.doingTaskItems = x
            localStorage.setItem("doingTaskItems", JSON.stringify(
                state.doingTaskItems.map(item => item)
            ));
        },

        notCheckedDone(state, action) {

            const index1 = action.payload.index1
            const index = action.payload.index
            const abc = state.doneTaskItems
            const abcd = abc[index1].subTask
            abcd[index].subTaskStatusKey = false

            const abcde = abc.map((item, index2) => index2 == index1 ? { ...item, subTask: abcd } : item)
            const x = abcde.filter(item => item.status == 'Done')
            state.doneTaskItems = x
            localStorage.setItem("doneTaskItems", JSON.stringify(
                state.doneTaskItems.map(item => item)
            ));
        },

        toDoChangeStatus(state, action) {

            const newItem = action.payload
            state.toDOTaskItems.push({
                title: newItem.title,
                description: newItem.description,
                subTask: newItem.subTask,
                status: 'Todo',
            })
            const status = newItem.status
            const indexx = newItem.indexx

            const c = status == 'Doing' ?
                state.doingTaskItems.splice(indexx, 1)
                :
                state.doneTaskItems.splice(indexx, 1)

            state.taskItems = [...state.toDOTaskItems, ...state.doingTaskItems, ...state.doneTaskItems]

            setItemFunc(
                state.taskItems.map((item) => item)
                , state.toDOTaskItems.map((item) => item),
                state.doingTaskItems.map((item) => item),
                state.doneTaskItems.map((item) => item),
            )
        },

        doingChangeStatus(state, action) {

            const newItem = action.payload
            state.doingTaskItems.push({
                title: newItem.title,
                description: newItem.description,
                subTask: newItem.subTask,
                status: 'Doing',
            })
            const status = newItem.status
            const indexx = newItem.indexx

            const c = status == 'Todo' ?
                state.toDOTaskItems.splice(indexx, 1)
                :
                state.doneTaskItems.splice(indexx, 1)

            state.taskItems = [...state.toDOTaskItems, ...state.doingTaskItems, ...state.doneTaskItems]

            setItemFunc(
                state.taskItems.map((item) => item)
                , state.toDOTaskItems.map((item) => item),
                state.doingTaskItems.map((item) => item),
                state.doneTaskItems.map((item) => item),
            )
        },

        doneChangeStatus(state, action) {

            const newItem = action.payload
            state.doneTaskItems.push({
                title: newItem.title,
                description: newItem.description,
                subTask: newItem.subTask,
                status: 'Done',
            })
            const status = newItem.status
            const indexx = newItem.indexx

            const c = status == 'Todo' ?
                state.toDOTaskItems.splice(indexx, 1)
                :
                state.doingTaskItems.splice(indexx, 1)

            state.taskItems = [...state.toDOTaskItems, ...state.doingTaskItems, ...state.doneTaskItems]

            setItemFunc(
                state.taskItems.map((item) => item)
                , state.toDOTaskItems.map((item) => item),
                state.doingTaskItems.map((item) => item),
                state.doneTaskItems.map((item) => item),
            )
        },

    }
})

export const taskActions = taskSlice.actions
export default taskSlice