import { ADD_USER, DELETE_USER, EDIT_USER } from "./constant";

const initiatlState = [];
const userReducer = (state = initiatlState, action) => {
    switch (action.type) {
        case ADD_USER:
            return [...state, action.payLoad];
        case DELETE_USER:
            return state.filter((user) => user.id !== action.payLoad)
        case EDIT_USER:
            return state.map((user) =>
                user.id === action.payLoad.id ? action.payLoad : user)
        default:
            return state
    }
}

export default userReducer;