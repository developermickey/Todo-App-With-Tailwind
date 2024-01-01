const TodoItems = ({todo, toggleTodo, deleteTodo}) => {
  return (
    <li className='flex items-center justify-between bg-white rounded-md p-2 shadow-md'>
    <label className="flex items-center space-x-2">
        <input type="checkbox" 
        checked={todo.completed}
        onChange={()=>toggleTodo(todo.id)}
        className="form-checkbox h-5 w-5 rounded" />
        <span className={`${todo.completed ? 'line-through text-gray-500' : 'text-black'}`}>{todo.text}</span>
    </label>
    <button className="text-red-500 hover:text-red-700"
    onClick={()=>deleteTodo(todo.id)}
    >Delete</button>

    </li>
  )
}

export default TodoItems
