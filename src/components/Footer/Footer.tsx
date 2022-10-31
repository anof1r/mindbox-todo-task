import React from 'react'
import { useDispatch } from 'react-redux'
import { setAllActive } from '../../store/reducers/todoReducer'
import './Footer.scss'

interface IFooterProps {
    itemsCount: number,
    setOnlyActive: () => void
    setOnlyFinished: () => void
    setAll: () => void
}

function Footer({ itemsCount, setOnlyActive, setOnlyFinished, setAll }: IFooterProps) {
    const dispatch = useDispatch()
    return (
        <div className="todo-footer">
            <span className="todo-footer__count">{itemsCount} items left</span>
            <div className="todo-footer__button">
                <button onClick={setAll}>All</button>
                <button onClick={setOnlyActive}>Active</button>
                <button onClick={setOnlyFinished}>Complited</button>
            </div>
            <button onClick={() => dispatch(setAllActive())}>Clear completed</button>
        </div>
    )
}

export default Footer