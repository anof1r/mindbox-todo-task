import { ITodo, ITodoState, TodoAction, TodoActionTypes } from "../../types/todo";
import { v4 as uuid } from "uuid";

const initialState: ITodoState = {
    todos: [] as Array<ITodo>
}

export default function todosReducer(state = initialState, action: TodoAction) {
    switch (action.type) {
        case TodoActionTypes.ADD_TODO:
            return {
                todos: [
                    ...state.todos,
                    {
                        id: uuid(),
                        text: action.payload,
                        isActive: true
                    }
                ]
            }
        case TodoActionTypes.TOGGLE_TODO_STATE:
            return {
                todos: state.todos.map((todo: ITodo) => todo.id === action.payload ? { ...todo, isActive: !todo.isActive } : todo)
            }
        case TodoActionTypes.SET_ALL_ACTIVE:
            return {
                todos: state.todos.map((todo: ITodo) => {
                    return {
                        ...todo,
                        isActive: true
                    }
                })
            }
        default:
            return state
    }
}

export const setTodo = (todoText: string) => ({ type: TodoActionTypes.ADD_TODO, payload: todoText })
export const toggleTodo = (id: string) => ({ type: TodoActionTypes.TOGGLE_TODO_STATE, payload: id })
export const setAllActive = () => ({ type: TodoActionTypes.SET_ALL_ACTIVE })