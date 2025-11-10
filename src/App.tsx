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
  // filters state stores currently selected status and priority
  const [filters, setFilters] = useState<{
    status?: TaskStatus;
    priority?: "low" | "medium" | "high";
  }>({});

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

  // receives filters from TaskFilter and updates filter state
  const handleFilterChange = (filtersUpdate: {
    status?: TaskStatus;
    priority?: "low" | "medium" | "high";
  }) => {
    // merge new filters with existing ones so user can select both status and priority
    setFilters((prev) => ({
      ...prev,
      ...filtersUpdate,
    }));
    // shows whats happening when filters r changed
    console.log("filters received in app:", { ...filters, ...filtersUpdate });
  };

  // apply filters before rendering the task list
  // 1. if a filer value only include tasks that match it
  // 2. if no filter set show all tasks for it
  const filteredTasks = tasks.filter((task) => {
    if (filters.status && task.status !== filters.status) return false;
    if (filters.priority && task.priority !== filters.priority) return false;
    return true; // include task if passes all filters
  });

  return (
    <div className="min-h-screen bg-neutral-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-6">React Task Manager</h1>
      <TaskFilter onFilterChange={handleFilterChange} />
      <TaskList
        tasks={filteredTasks}
        onStatusChange={handleStatusChange}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
