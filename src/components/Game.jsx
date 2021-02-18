import React, {useState} from "react";
import {Board} from "./Board";
import {calculateWinner} from "../utils/calculateWinner";

export const Game = () => {
    const [state, setState] = useState({
        history: [{
            squares: Array(9).fill(null)
        }],
        stepNumber: 0,
        xIsNext: true
    })

    const handleClick = i => {
        const history = state.history.slice(0, state.stepNumber + 1)
        const current = history[history.length - 1]
        const squares = current.squares.slice()

        if (calculateWinner(squares) || squares[i]) return

        squares[i] = state.xIsNext ? 'X' : 'O'

        setState({
            ...state,
            history: history.concat([{
                squares: squares,
            }]),
            stepNumber: history.length,
            xIsNext: !state.xIsNext
        })
    }

    const jumpTo = step => {
        setState({
            ...state,
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        })
    }

    const history = state.history
    const current = history[state.stepNumber]
    const winner = calculateWinner(current.squares)

    let status = `Следующий игрок: ${state.xIsNext ? 'X' : 'O'}`

    if (winner) status = `Выиграл ${winner}`

    const moves = history.map((step, move) => {
        const desc = move ? `Перейти к ходу #${move}` : 'К началу игры'

        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{desc}</button>
            </li>
        )
    })

    return (
        <div className="game">
            {console.log(state)}
            <div className="game-board">
                <Board
                    squares={current.squares}
                    handleClick={handleClick}/>
            </div>
            <div className="game-info">
                <div>{status}</div>
                <ol>{moves}</ol>
            </div>
        </div>
    )
}