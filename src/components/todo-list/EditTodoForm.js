import React from "react";

export default function EditTodoForm ({editTodo, task}) {
    const [value, setValue] = React.useState("");

    function handleSubmit(e) {
        e.preventDefault();
        editTodo(value, task.id)
        setValue("")
    }

    return (
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input 
            type="text" 
            classname="todo-input" 
            placeholder="Update Task"
            onChange={(e) => setValue(e.target.value)}
            value={value}
            />
            <button type="submit" className="todo-btn">Update Task</button>
        </form>
    )
}