export default function TodoInput(props) {
    const { handleAddTodos, todoValue, setTodoValue } = props

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleAddTodos(todoValue)
            setTodoValue("")
        }
    }

    return (
        <header>
            <input
                value={todoValue}
                onChange={(e) => {
                    setTodoValue(e.target.value)
                }}
                onKeyDown={handleKeyPress}
                placeholder="Enter todo..."
            ></input>
            <button
                onClick={() => {
                    handleAddTodos(todoValue)
                    setTodoValue("")
                }}
            >
                Add Todo
            </button>
        </header>
    )
}