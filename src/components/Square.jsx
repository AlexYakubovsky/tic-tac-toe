import React from "react"

export const Square = ({handleClick, value, winnerSquare}) => {
    return (
        <button
            className={`square ${winnerSquare ? 'winnerSquare' : ''}`}
            onClick={handleClick}>
            {value}
        </button>
    )
}