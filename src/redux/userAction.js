import { ADD_USER, DELETE_USER, EDIT_USER } from "./constant";

export const addUser = (user) => ({
    type: ADD_USER,
    payLoad: user
})

export const deleteUser = (userId) => ({
    type: DELETE_USER,
    payLoad: userId
})

export const editUser = (user) => ({
    type: EDIT_USER,
    payLoad: user
})