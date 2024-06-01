import { ADD_USER } from "./constant";

export const addUser = (user) => ({
    type: ADD_USER,
    payLoad: user
})