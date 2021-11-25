import React from "react";

const Display = (props) => {

    const handleChange = (e) => {
        if (e.target.value >= 1 && e.target.value <= props.ansNum) {
            props.setToShow(e.target.value-1)
        }
    }

    if (props.ansNum === -1) {
        return (
            <div className={"Display"}>
            </div>
        )
    }else{
        return (
            <div className={"Display"}>
                {props.ansNum === 0 || props.ansNum === 1 ? "展示" : "运算结束"}
                <div className="mdui-textfield mdui-textfield-floating-label marginless" style={{
                    width: "150px"
                }}>
                    <label className="mdui-textfield-label">输入序号(1~{props.ansNum})</label>
                    <input onChange={handleChange} className="mdui-textfield-input" type="email"/>
                </div>
                <button disabled={props.ansLength === 0} className="mdui-btn mdui-btn-raised mdui-ripple mdui-color-cyan-500" style={{
                    display: "inline-block",
                    position: "relative",
                    top: "3px"
                }}>查看</button>
            </div>
        )
    }
}

export default Display;
