import type { TaskListProps } from "../../types";

export default function TaskList({ tasks }: TaskListProps) {
  // if there's not tasks renders a div
  if (tasks.length === 0) {
    return <div>No tasks yet.</div>;
  }

  return (
    // lops thru tasks array and renders li element with unique key
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>{task.title}</li>
      ))}
    </ul>
  );
}
