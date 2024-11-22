import { Todo } from '../types/todo';
import TodoItem from './TodoItem'


interface TodoListProps{
  todos: Todo[];
  onCompletedChange: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}
function TodoList({todos, onDelete, onCompletedChange}: TodoListProps) {
  const todosSorted = todos.sort((a,b) => {
    if (a.completed === b.completed){
      return b.id - a.id;
    }
    return a.completed ? 1 : -1
  })
  return (
    <>
    <div className="space-y-2">
        {todosSorted.map((todo) =>(
            <TodoItem todo={todo}
            key={todo.id}
            onCompletedChange={onCompletedChange}
            onDelete={onDelete}
            />
        ))}
            
    </div>
    {todos.length === 0 && (
      <p className='text-center text-sm text-gray-500'>No todos here add a new one</p>
    )}
    </>
  )
}

export default TodoList
