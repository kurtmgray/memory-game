import React from "react";

export default function GameOver (props) {
    return (
        <div>
            {props.winLose === 'win' ? <h1>YOU WIN. Click an image to play again.</h1> : null}
            {props.winLose === 'lose' ? <h1>YOU LOSE, YOU LOSER. Click an image to keep playing.</h1> : null}
      </div>
    )
}