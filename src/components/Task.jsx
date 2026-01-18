import { CheckIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Task({ tasks, onTaskClick, onTaskDeleteClick }) {
  const navigate = useNavigate();

  function onSeeDetailsTask(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);

    navigate(`/tasks?${query.toString()}`);
  }

  return (
    <ul className="space-y-4 p-6 bg-purple-700 rounded-md shadow">
      {tasks.map((task) => (
        <li className="flex gap-2 " key={task.id}>
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-gray-200 text-left w-full flex items-center gap-2 text-black p-2 rounded-md ${task.isCompleted && "line-through"}`}
          >
            {task.isCompleted && <CheckIcon />}
            {task.title}
          </button>

          <Button onClick={() => onSeeDetailsTask(task)}>
            <ChevronRightIcon />
          </Button>

          <Button onClick={() => onTaskDeleteClick(task.id)}>
            <TrashIcon />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Task;
