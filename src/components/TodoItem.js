const TodoItem = ({ todo, setRefresh }) => {

    const updateTodo = () => {
        todo.done = !todo.done

        fetch("http://localhost:8001/todos" + todo.id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(todo)
        }).then(() => {
            alert('todo updated')
            setRefresh(true)
        })
    }

    const deleteTodo = () => {
        fetch("http://localhost:8001/todos" + todo.id, {
            method: "DELETE",
        }).then(() => {
            alert('todo deleted')
            setRefresh(true)
        })
    }

    // console.log(todo.done);
    return (
        <li className={`${todo.done ? "checked" : ""}`}>
            <div onClick={updateTodo}>{todo.title}</div>
            <span className="close" onClick={deleteTodo}>x</span>
        </li>
    );
}

export default TodoItem;