import type { TaskFilterProps } from "../../types";

export default function TaskFilter({ onFilterChange }: TaskFilterProps) {
  // handler for status filter dropdown
  const handleStatusFilterChange = (e: any) => {
    // gets value of the dropdown
    const value = e.target.value;
    // logs to confirm its wired properly
    console.log("status changed:", value);
    // now sends a real filter object
    onFilterChange({
      // if the user selects 'all', it sends undefined (aka no filter)
      status: value === "all" ? undefined : value,
    });
  };

  // handler for priority filter dropdown
  const handlePriorityFilterChange = (e: any) => {
    const value = e.target.value;
    console.log("priority filter changed:", value);
    // now sends a real filter object
    onFilterChange({
      priority: value === "all" ? undefined : value,
    });
  };

  return (
    // render filter dropdown menus
    <div className="mb-4 flex flex-wrap items-center gap-4">
      <div className="flex items-center gap-2">
        <label className="text-sm text-gray-300">
          Status:
          <select
            onChange={handleStatusFilterChange}
            defaultValue="all"
            className="ml-2 rounded border border-gray-600 bg-neutral-900 px-2 py-1 text-sm text-gray-200"
          >
            <option value="all">All</option>
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </label>
      </div>

      <div className="flex items-center gap-2">
        <label className="text-sm text-gray-300">
          Priority:
          <select
            onChange={handlePriorityFilterChange}
            defaultValue="all"
            className="ml-2 rounded border border-gray-600 bg-neutral-900 px-2 py-1 text-sm text-gray-200"
          >
            <option value="all">All</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>
      </div>
    </div>
  );
}
