import TodoItems from "./TodoItems"

const TodoList = ({todos, toggleTodo, deleteTodo}) => {
  return (
   <ul className='mt-4 space-y-2'>
   {todos.map((todo) => (
    <TodoItems
        key={todos.id}
        todo={todo}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
     />
   ))}
   
   </ul>
  );
};

export default TodoList
