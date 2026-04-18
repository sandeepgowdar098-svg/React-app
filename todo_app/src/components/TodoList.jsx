import React from 'react'
import Todoitem from './Todoitem'

function TodoList({ todos, deleteTodo }) {
  return (
    <div className="space-y-3">
      {todos.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-slate-700 bg-slate-950/70 p-8 text-center text-slate-500">
          <p className="text-lg font-medium text-slate-200">Nothing here yet.</p>
          <p className="mt-2 text-sm leading-6">Add your first task to start tracking progress and clearing your list.</p>
        </div>
      ) : (
        todos.map((todo, index) => (
          <Todoitem key={index} todo={todo} index={index} deleteTodo={deleteTodo} />
        ))
      )}
    </div>
  )
}

export default TodoList