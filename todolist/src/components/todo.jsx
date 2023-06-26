import React from "react";

function Todo(props) {
    return (<div onClick={() => {
        props.onChecked(props.id);
    }}
    >
        <li className="data">{props.text}</li>
    </div>
    )
}

export default Todo;