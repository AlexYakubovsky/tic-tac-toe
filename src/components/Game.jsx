import React, {useState} from "react"
import {Board} from "./Board"
import styles from "./Game.module.css"
import {calculateWinner} from "../utils/calculateWinner"

export const Game = () => {
    const [state, setState] = useState({
        history: [{
            squares: Array(9).fill(null),
            row: null,
            column: null
        }],
        stepNumber: 0,
        xIsNext: true,
        active: 0
    })

    const history = state.history
    const current = history[state.stepNumber]
    const winnerResult = calculateWinner(current.squares)

    let status = `Следующий игрок: ${state.xIsNext ? 'X' : 'O'}`

    if (winnerResult) status = `Выиграл ${winnerResult.winner}`
    if (state.stepNumber > 8) status = 'Ничья!'

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
                row: Math.floor(i / 3 + 1),
                column: i % 3 + 1
            }]),
            stepNumber: history.length,
            xIsNext: !state.xIsNext,
            active: state.stepNumber + 1
        })
    }

    const moves = history.map((step, move) => {
        const desc = move ? `Перейти к ходу #${move} (${step.row}:${step.column})` : 'К началу игры'

        return (
            <li key={move}>
                <button
                    className={state.active === move ? styles.active : ''}
                    onClick={() => jumpTo(move)}>
                    {desc}
                </button>
            </li>
        )
    })

    const jumpTo = step => {
        setState({
            ...state,
            stepNumber: step,
            xIsNext: (step % 2) === 0,
            active: step
        })
    }

    return (
        <div className="game">
            <div className="game-board">
                <Board
                    winnerSquares={winnerResult && winnerResult.winnerSquares}
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