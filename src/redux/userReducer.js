import { ADD_USER } from "./constant";

const initiatlState = [];
const userReducer = (state = initiatlState, action) => {
    switch (action.type) {
        case ADD_USER:
            return [...state, action.payLoad];
        default:
            return state
    }
}

export default userReducer;