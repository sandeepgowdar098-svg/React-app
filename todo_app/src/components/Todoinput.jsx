import { useState } from "react";

function Todoinput({ addTodo }) {
  const [todo, setTodo] = useState("");

  const handleAdd = () => {
    if (todo.trim() !== "") {
      addTodo(todo.trim())
      setTodo("")
    }
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleAdd()
    }
  }

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <label htmlFor="todo-input" className="sr-only">New task</label>
      <input
        id="todo-input"
        type="text"
        placeholder="Add a new task..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        onKeyDown={handleKeyDown}
        className="w-full rounded-3xl border border-slate-700 bg-slate-950/80 px-5 py-4 text-base text-slate-100 shadow-sm outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/10"
      />
      <button
        type="button"
        onClick={handleAdd}
        className="inline-flex items-center justify-center rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-4 text-base font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:brightness-110"
      >
        Add task
      </button>
    </div>
  )
}

export default Todoinput; 