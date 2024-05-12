export default function TodoInput(props) {
    const { handleAddTodos, todoValue, setTodoValue } = props
    return (
        <header>
            <input value={todoValue} onChange={(e) => {
                setTodoValue(e.target.value)
            }}
                placeholder="Enter todo..."></input>
            <button onClick={() => {
                handleAddTodos(todoValue)
                setTodoValue("")
            }}>Add Todo</button>
        </header>
    )
}