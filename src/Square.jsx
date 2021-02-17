import React from "react";

export const Square = ({handleClick, value}) => {
    return (
        <button
            className="square"
            onClick={handleClick}>
            {value}
        </button>
    )
}