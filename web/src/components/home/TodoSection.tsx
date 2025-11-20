import {TodoItem} from "./TodoItem";
import type {Task} from "@/types/task";

interface TodoSectionProps {
  title: string;
  todos: Task[];
  onToggle?: (id: string, completed: boolean) => void;
}

export function TodoSection({title, todos, onToggle}: TodoSectionProps) {
  if (todos.length === 0) return null;

  return (
    <div className="flex flex-col gap-2 w-full">
      <h2 className="px-1 text-sm font-medium leading-[1.4285714285714286em] text-[#64748B]">{title}</h2>
      <div className="bg-white rounded-lg shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] w-full">
        {todos.map((todo, index) => (
          <TodoItem key={todo.id} text={todo.task_name} completed={todo.completed} onChange={(completed) => onToggle?.(todo.id, completed)} isLast={index === todos.length - 1} />
        ))}
      </div>
    </div>
  );
}
