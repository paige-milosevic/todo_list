import React, { useState } from "react";

const Form = (props) => {

    const {todoList, setToDoList} = props;
    const [item, setItem] = useState("");

    const eventHandler = (e) => {
        e.preventDefault(e);

        setToDoList([...todoList, 
        {
            item: item,
            id: Math.floor(Math.random() * 10000).toString(),
            markedDeleted: false
        }
    ])
    setItem("");
    console.log("Passed")
    }
    
    return(
        <form onSubmit={eventHandler}>
            <div>
                <input type="text" name="item" onChange={(e) => setItem(e.target.value)}></input>
            </div>
            <button>Add</button>
        </form>
    )

}
export default Form;