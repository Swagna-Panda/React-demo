import {ADD_TASK, UPDATE_TASK_DESCRIPTION, UPDATE_TASK_TITLE} from "./taskActionTypes";

const initialState = {
    tasks: [],
    taskTitle: "",
    taskDescription: ""
};

const taskReducer = (state = initialState, action) => {
    console.log("Add task",action.type)
    switch (action.type) {
        case ADD_TASK:
            console.log("Add task",action.payload)
            console.log("State",state)
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
                    taskTitle: "",
                    taskDescription: ""
            };
        case UPDATE_TASK_TITLE:
            return {
                ...state,
                tasks: [...state.tasks],
                taskTitle: action.payload,
            }
        case UPDATE_TASK_DESCRIPTION:
            return {
                ...state,
                tasks: [...state.tasks],
                taskDescription: action.payload,
            }
        default:
            return state;
            
    }
};

export default taskReducer;
