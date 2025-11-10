import type { TaskListProps } from "../../types";

export default function TaskList({ tasks }: TaskListProps) {
  if (tasks.length === 0) {
    return <div>No tasks yet.</div>;
  }

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} style={{ marginBottom: "1rem" }}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Status: {task.status}</p>
        </li>
      ))}
    </ul>
  );
}
