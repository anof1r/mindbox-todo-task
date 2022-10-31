import { configureStore } from '@reduxjs/toolkit'
import todosReducer from './reducers/todoReducer'

export const store = configureStore({
    reducer: todosReducer
})