import { useState } from "react";
import type { Task, TaskStatus } from "./types";
import TaskList from "./components/TaskList/TaskList";
import TaskFilter from "./components/TaskFilter/TaskFilter";

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Task 1",
      description: "Description 1",
      status: "pending",
      priority: "low",
      dueDate: "2023-12-31",
    },
    {
      id: "2",
      title: "Task 2",
      description: "Description 2",
      status: "in-progress",
      priority: "medium",
      dueDate: "2024-01-01",
    },
    {
      id: "3",
      title: "Task 3",
      description: "Description 3",
      status: "completed",
      priority: "high",
      dueDate: "2024-01-02",
    },
  ]);

  // on status change, finds matching task by id and updates status
  const handleStatusChange = (taskId: string, newStatus: TaskStatus) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  // go thru list and makes new array w only tasks whose id do not match the one being deleted, new array replaces previous state
  const handleDelete = (taskId: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
  };

  // receives filters from TaskFilter (for now just logs them)
  const handleFilterChange = (filters: {
    status?: TaskStatus;
    priority?: "low" | "medium" | "high";
  }) => {
    console.log("filter in app:", filters);
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-6">My Tasks</h1>
      {/* only logs selected filters for now */}
      <TaskFilter onFilterChange={handleFilterChange} />
      <TaskList
        tasks={tasks}
        onStatusChange={handleStatusChange}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
