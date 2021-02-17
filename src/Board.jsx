import React from "react";
import {Square} from "./Square";

export const Board = ({handleClick, squares}) => {
    const renderSquare = i => {
        return (
            <Square
                handleClick={() => handleClick(i)}
                value={squares[i]}
            />
        )
    }

    return (
        <div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    )
}