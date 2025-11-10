import type { TaskItemProps, TaskStatus } from "../../types";

export default function TaskItem({
  task,
  onStatusChange,
  onDelete,
}: TaskItemProps) {
  // uses line thru text style for completed task
  const statusTextClasses =
    task.status === "completed" ? "line-through text-gray-400" : "text-white";

  // render text color based on priority
  const priorityTextClasses =
    task.priority === "high"
      ? "text-red-400"
      : task.priority === "medium"
      ? "text-yellow-400"
      : "text-green-400";

  return (
    <li className="p-4 border border-gray-700 rounded-lg bg-neutral-800 flex items-center justify-between hover:bg-neutral-700 transition duration-200">
      {/* left side: task info */}
      <div className="flex flex-col gap-2">
        <h3 className={`text-lg font-semibold ${statusTextClasses}`}>
          {task.title}
        </h3>
        <p className="text-gray-300">{task.description}</p>

        {/* priority and due date */}
        <div className="flex flex-wrap items-center gap-2 text-sm mt-1">
          <span className={priorityTextClasses}>Priority: {task.priority}</span>
          <span className="text-gray-400">Due: {task.dueDate}</span>
        </div>
      </div>

      {/* right side: dropdown + delete */}
      <div className="flex items-center gap-4">
        <select
          value={task.status}
          onChange={(e) =>
            onStatusChange(task.id, e.target.value as TaskStatus)
          }
          className="rounded border border-gray-600 bg-neutral-900 text-sm px-2 py-1 text-gray-200 hover:border-gray-400"
        >
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>

        <button
          onClick={() => onDelete(task.id)}
          className="text-red-400 text-sm hover:underline active:text-red-500"
        >
          Delete
        </button>
      </div>
    </li>
  );
}
