import React from "react"
import styles from './Board.module.css'

export const Square = ({handleClick, value, winnerSquare}) => {
    return (
        <button
            className={`square ${winnerSquare ? `${styles.winnerSquare}` : ''}`}
            onClick={handleClick}>
            {value}
        </button>
    )
}