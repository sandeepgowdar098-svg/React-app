import React from 'react'

function Todoitem({ todo, index, deleteTodo }) {
  return (
    <div className="flex items-center justify-between rounded-3xl border border-white/10 bg-slate-950/90 px-5 py-4 shadow-[0_18px_50px_-20px_rgba(15,23,42,0.8)]">
      <div className="max-w-[80%]">
        <p className="text-base font-medium text-slate-100">{todo}</p>
      </div>
      <button
        type="button"
        onClick={() => deleteTodo(index)}
        className="rounded-2xl bg-slate-800 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:bg-red-500 hover:text-white"
      >
        Delete
      </button>
    </div>
  )
}

export default Todoitem