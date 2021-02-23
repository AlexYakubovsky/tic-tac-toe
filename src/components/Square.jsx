import React from "react";
import style from './Board.module.css'

export const Square = ({handleClick, value, winnerSquare}) => {
    return (
        <button
            className={`square ${winnerSquare ? `${style.winnerSquare}` : ''}`}
            onClick={handleClick}>
            {value}
        </button>
    )
}