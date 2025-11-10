import type { TaskListProps } from "../../types";
import TaskItem from "../TaskItem/TaskItem";

export default function TaskList({
  tasks,
  onStatusChange,
  onDelete,
}: TaskListProps) {
  // if there's not tasks renders a div
  if (tasks.length === 0) {
    return <div className="text-gray-400 text-center mt-4">No tasks yet.</div>;
  }

  return (
    <ul className="space-y-4">
      {/* lops thru tasks array and renders li element with unique key */}
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onStatusChange={onStatusChange}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
