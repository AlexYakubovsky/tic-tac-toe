import React from "react";
import {Square} from "./Square";

export const Board = ({handleClick, squares}) => {
    const renderSquare = i => {
        return (
            <Square
                handleClick={() => handleClick(i)}
                value={squares[i]}
                key={i}
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