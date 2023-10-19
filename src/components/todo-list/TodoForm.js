import React from "react";

export default function TodoForm ({addTodo}) {
    const [value, setValue] = React.useState("");

    function handleSubmit(e) {
        e.preventDefault();
        addTodo(value)
        setValue("")
    }

    return (
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input 
            type="text" 
            classname="todo-input" 
            placeholder="Put your task here"
            onChange={(e) => setValue(e.target.value)}
            value={value}
            />
            <button type="submit" className="todo-btn">Add Task</button>
        </form>
    )
}