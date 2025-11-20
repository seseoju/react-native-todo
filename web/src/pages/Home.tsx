import {useState} from "react";
import {HomeHeader} from "../components/layout/HomeHeader";
import {TodoSection} from "../components/home/TodoSection";
import {FloatingActionButton} from "../components/home/FloatingActionButton";
import {useTasks} from "@/service/tasks/queries";
import {Task} from "@/service/tasks/types";

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

const initialTodos: Todo[] = [
  {id: "1", text: "Design the new onboarding flow", completed: false},
  {id: "2", text: "Develop the main feature", completed: false},
  {id: "3", text: "Finalize the color palette for the app", completed: false},
  {id: "4", text: "Review user feedback from survey", completed: true},
];

export function Home() {
  // const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const handleToggle = (id: string, completed: boolean) => {
    // setTodos((prevTodos) => prevTodos.map((todo) => (todo.id === id ? {...todo, completed} : todo)));
  };

  const {data: tasks} = useTasks();
  const todoItems = tasks?.filter((task) => !task.completed) || ([] as Task[]);
  const completedItems = tasks?.filter((task) => task.completed) || ([] as Task[]);

  return (
    <div className="min-h-screen border bg-[#F6F7F8] flex flex-col overflow-y-auto">
      <HomeHeader />
      <main className="flex flex-col gap-8 px-4 pb-[426px] flex-1">
        <TodoSection title="To-Do" todos={todoItems} onToggle={handleToggle} />
        <TodoSection title="Completed" todos={completedItems} onToggle={handleToggle} />
      </main>
      <FloatingActionButton />
    </div>
  );
}
