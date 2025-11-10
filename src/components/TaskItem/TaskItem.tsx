import type { TaskStatus, TaskItemProps } from "../../types";

export default function TaskItem({
  task,
  onStatusChange,
  onDelete,
}: TaskItemProps) {
  return (
    <li className="p-4 border border-gray-700 rounded-lg bg-neutral-800 text-white flex items-center justify-between">
      {/* left task info */}
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-center">{task.title}</h3>
        <p className="text-gray-300 text-center">{task.description}</p>
        <p className="text-sm text-gray-400 text-center">
          Status: {task.status}
        </p>
      </div>

      {/* right controls */}
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
  );
}
