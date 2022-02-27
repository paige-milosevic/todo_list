import React from "react";

const Display = (props) => {

    const {todoList, setToDoList} = props;

    const deleteItemById = (idFromBelow) => {
        setToDoList(todoList.filter((item, index) => item.id !== idFromBelow))
    };

    const strikeThrough = (todo) => {
        todo.markedDelete = !todo.markedDelete;
        setToDoList([...todoList]);
    }

    const style = (markedDelete) => {
        if (markedDelete === true){
            return "completed"
        }
        else {
            return "notCompleted"
        }
    }

    return(
        <div>
            <h1>ToDo List!</h1>
            {
                todoList.map((item, index) => {
                    return(
                        <div key={index}>
                            <p className={style(item.markedDelete)}>{item.item}</p>
                            <input type="checkbox" onClick={() => strikeThrough(item)}/> 
                            <button onClick={() => deleteItemById(item.id)}>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Display;