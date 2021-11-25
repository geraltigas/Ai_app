import React from "react";
import Board from "./Board";
import Algo from "./Algo";
import Display from "./Display";
const {ipcRenderer} = require('electron');

const algorithm = [
    "default",
    "dfs",
    "bfs"
]

let answerArrays = []


const AI_App = (props) => {

    const [toShow,setToShow] = React.useState("01234567"); // Board's state

    const [mode,setMode] = React.useState("none"); // Now algorithm

    const [ansNum,setAnsNum] = React.useState(1); // The number of answer

    const [ansPoint,setAnsPoint] = React.useState(-1); // The pointer of the answer to show;

    const handleAlgo = (algo) => {
        setMode(algo)
    }

    const callAlgo = () => {
        console.log("cliked")
        ipcRenderer.send("algoCall",mode);
        ipcRenderer.on("algoBack",(event,args) => {
            answerArrays = args.split(" ");
            answerArrays.shift()
            console.log(answerArrays)
            setAnsNum(answerArrays.length)
            setAnsPoint(0);
        })
    }

    const handleShow = (index) => {
        setToShow(answerArrays[index])
    }

    return (
        <div>
            <Board toShow={toShow}> </Board>
            <div className={"footContainer"}>
                <Algo mode={mode} callAlgo={callAlgo} algorithm={algorithm} nowChecked = {mode} toFather={handleAlgo}> </Algo>
                <Display ansLength={answerArrays.length} ansNum={ansNum} ansPoint={ansPoint} setToShow={handleShow}> </Display>
            </div>
        </div>
    )
}

export default AI_App;
