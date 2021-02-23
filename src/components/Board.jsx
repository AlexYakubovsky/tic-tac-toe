import React from "react";
import {Square} from "./Square";

export const Board = ({handleClick, squares, winnerSquares}) => {
    const renderSquare = i => {
        const winnerSquare = winnerSquares && winnerSquares.includes(i)

        return (
            <Square
                key={i}
                handleClick={() => handleClick(i)}
                value={squares[i]}
                winnerSquare={winnerSquare}
            />
        )
    }

    return (
        <>
            {[...Array(3)].map((_, i) => (
                <div key={i} className="board-row">
                    {[...Array(3)].map((_, j) => renderSquare(3 * i + j))}
                </div>
            ))}
        </>
    );
}