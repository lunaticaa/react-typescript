import { useState } from "react"
import TodoItem from "./components/TodoItem"
import { dummyData } from "./data/todos"
import AddTodoForm from "./components/AddTodoForm"
import TodoList from "./components/TodoList"

function App() {
  const [todos, setTodos] = useState(dummyData)
  function setTodoCompleted(id: number, completed: boolean){
    setTodos((prevTodos) => prevTodos.map(todo => (
      todo.id === id ? {...todo, completed} : todo
    )))
  }
  function addTodo(title: string){
    setTodos(prevAddTodo => [
      {
        id: prevAddTodo.length + 1,
        title,
        completed: false
      },
      ...prevAddTodo
    ])
  }

  return (
    <>
      <main className="py-10 h-screen space-y-5">
        <h1 className="font-bold text-3xl text-center">todo list</h1>
        <div className="max-w-lg mx-auto bg-slate-400 rounded-md p-5 space-y-6">
          <AddTodoForm onSubmit={addTodo}/>
          <TodoList todos={todos} onCompletedChange={setTodoCompleted}/>
          
        </div>
      </main>
    </>
  )
}

export default App
