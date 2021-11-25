import React from "react";


const Algo = (props) => {

    let buttonToShow = [];

    const algorithmClick = () => {
        props.callAlgo();
    }

    const clickHandler = (e) => {
        let nodes = document.getElementsByName("algorithm")
        for(let i = 0 ; i < nodes.length; i++) {
            if (nodes[i].checked) {
                props.toFather(props.algorithm[i]);
                break;
            }
        }
    }

    for(let i = 0 ; i < props.algorithm.length ; ++i) {
        buttonToShow.push(
            <label className="mdui-radio" key={i}>
                <input onClick={clickHandler} type="radio" name="algorithm" />
                <i className="mdui-radio-icon"> </i>
                {props.algorithm[i]}
            </label>
        )
    }

    return (
        <div>
            <div className={"buttonGroup"}>
                <form>
                    {buttonToShow}
                </form>
                <button disabled={props.mode == "none" ? true:false} className={"mdui-btn mdui-btn-raised mdui-ripple mdui-color-cyan-500"} onClick={algorithmClick}>
                    计算
                </button>
            </div>
        </div>
    )
}

export default Algo;

