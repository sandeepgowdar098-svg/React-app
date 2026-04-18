import { useState } from "react"
import Header from "./components/Header"
import Todoinput from "./components/Todoinput"
import TodoList from "./components/TodoList"
import './App.css'

function App(){
  const [todos, setTodos] = useState([])

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  }

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index)
    setTodos(newTodos)
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 px-4 py-10 md:px-6">
      <div className="mx-auto w-full max-w-3xl rounded-[32px] border border-white/10 bg-slate-900/80 p-6 shadow-[0_30px_100px_-45px_rgba(15,23,42,0.9)] ring-1 ring-white/10 backdrop-blur-xl md:p-10">
        <Header />

        <div className="mb-8 rounded-[28px] bg-slate-800/80 border border-white/10 p-6 shadow-inner shadow-slate-950/20">
          <Todoinput addTodo={handleAddTodo} />
          <TodoList todos={todos} deleteTodo={handleDeleteTodo} />
        </div>

        <div className="mt-6 rounded-3xl border border-white/10 bg-slate-950/80 p-5 text-sm text-slate-400">
          <p className="mb-2 text-slate-300">Pro tip:</p>
          <p className="leading-6">Keep your task list short and actionable. Completed tasks can be removed immediately to keep the workspace clean.</p>
        </div>
      </div>
    </div>
  ) 
}

export default App