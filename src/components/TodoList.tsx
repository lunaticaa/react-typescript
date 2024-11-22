import { Todo } from '../types/todo';
import TodoItem from './TodoItem'


interface TodoListProps{
  todos: Todo[];
  onCompletedChange: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}
function TodoList({todos, onDelete, onCompletedChange}: TodoListProps) {
  const todosSorted = todos.sort()
  return (
    <div className="space-y-2">
        {todos.map((todo) =>(
            <TodoItem todo={todo}
            key={todo.id}
            onCompletedChange={onCompletedChange}
            />
        ))}
            
    </div>
  )
}

export default TodoList
