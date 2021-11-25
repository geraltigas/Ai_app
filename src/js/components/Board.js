import React from "react";

const Board = (props) => {

    // let arrayShow = new Array(8).fill(new Array(8).fill(false));

    let showBoard = [];

    for(let i = 0; i < 8 ; ++i) {
        let temp = parseInt(props.toShow[i]);
        for(let j = 0; j < 8 ; ++j){
            if (j === temp) {
                showBoard.push(
                    <div key={i+""+j} className={"showBoardBlock"}>
                        <img src={"src/static/chess-queen.svg"}/>
                    </div>
                )
            }else {
                showBoard.push(
                    <div key={i+""+j} className={"showBoardBlock"}>
                    </div>
                )
            }
        }

    }

    return (
        <div className={"Board"} >
            {showBoard}
        </div>
    )
}

export default Board;
