
export enum TodoActionTypes {
    ADD_TODO = 'ADD_TODO',
    TOGGLE_TODO_STATE = 'TOGGLE_TODO_STATE',
    SET_ALL_ACTIVE = 'SET_ALL_ACTIVE'
}

export interface ITodo {
    id: string,
    text: string,
    isActive: boolean
}

interface ISetTodoAction {
    type: TodoActionTypes.ADD_TODO,
    payload: ITodo['text']
}

interface IToggleTodoStateAction {
    type: TodoActionTypes.TOGGLE_TODO_STATE,
    payload: ITodo['id']
}

interface ISetAllActiveAction {
    type: TodoActionTypes.SET_ALL_ACTIVE,
}

export interface ITodoState {
    todos: Array<ITodo>
}

export type TodoAction = ISetTodoAction | IToggleTodoStateAction | ISetAllActiveAction