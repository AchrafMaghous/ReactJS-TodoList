import { useState, useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {

  const [todos, setTodos] = useState([])
  const [todoValue, setTodoValue] = useState("")

  function persistData(newList) {
    localStorage.setItem("todos", JSON.stringify({todos: newList}))
  }

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo]
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleEditTodo(index) {
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    handleDeleteTodo(index)
  }

  useEffect(() => {
    if (!localStorage) return
    let localTodos = localStorage.getItem("todos")
    if (!localTodos) return

    localTodos = JSON.parse(localTodos)
    setTodos(localTodos)
  }, [])
  return (
    <>
      <TodoInput handleAddTodos={handleAddTodos} setTodoValue={setTodoValue} todoValue={todoValue} />
      <TodoList handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo} todos={todos} />
    </>
  )
}

export default App