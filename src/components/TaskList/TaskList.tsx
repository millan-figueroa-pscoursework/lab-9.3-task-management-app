import type { TaskListProps, TaskStatus } from "../../types";

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
        <li
          key={task.id}
          className="p-4 border border-gray-700 rounded-lg bg-neutral-800 text-white flex items-center justify-between"
        >
          {/* left side task info */}
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">{task.title}</h3>
            <p className="text-gray-300">{task.description}</p>
            <p className="text-sm text-gray-400">Status: {task.status}</p>
          </div>

          {/* right side dropdown + delete */}
          <div className="flex items-center gap-4">
            <select
              value={task.status}
              onChange={(e) =>
                onStatusChange(task.id, e.target.value as TaskStatus)
              }
              className="rounded border border-gray-600 bg-neutral-900 text-sm px-2 py-1 text-gray-200"
            >
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>

            <button
              onClick={() => onDelete(task.id)}
              className="text-red-400 text-sm hover:underline"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
