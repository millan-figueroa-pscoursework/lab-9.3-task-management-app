import { useState } from "react";
import TaskList from "./components/TaskList/TaskList";
import type { Task, TaskStatus } from "./types";

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Sample Task",
      description: "This is your first task!",
      status: "pending",
      priority: "medium",
      dueDate: "2025-11-15",
    },
  ]);

  const handleStatusChange = () => {
    return "status changed!";
  };

  const handleDelete = () => {
    return "deleted!";
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>My Tasks</h1>

      <TaskList
        tasks={tasks}
        onStatusChange={handleStatusChange}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
