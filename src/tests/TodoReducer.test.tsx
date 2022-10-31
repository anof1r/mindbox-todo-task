import '@testing-library/jest-dom/extend-expect'
import todosReducer from '../store/reducers/todoReducer'
import { TodoAction, ITodoState, ITodo, TodoActionTypes } from '../types/todo';

const initialState: ITodoState = {
    todos: [] as Array<ITodo>
}

describe('reducer tests', () => {
    it('should return the initial state', () => {
        expect(todosReducer(initialState, {} as TodoAction)).toEqual({
            todos: [] as Array<ITodo>
        })
    })
    it('should toggle isActive field', () => {
        expect(todosReducer({ todos: [{ id: 'test', text: 'test', isActive: true }] } as ITodoState,
            {
                type: TodoActionTypes.TOGGLE_TODO_STATE,
                payload: 'test'
            })).toEqual({
                todos: [{
                    id: 'test', text: 'test', isActive: false
                }]
            })
    })
})