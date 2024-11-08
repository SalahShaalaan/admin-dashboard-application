import { useState } from "react";

export default function Task({ task, toggleComplete, toggleImportant, deleteTask }) {
  const [isStarred, setIsStarred] = useState(false)
  return (
    <div className={`p-6 border-b ${task.isComplete ? 'bg-blue text-white' : 'bg-white dark:bg-SecDarkBg'} space-y-6 rounded-lg border dark:border-none text-base`}>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-row items-center space-x-4 w-full">
          <input
            type="checkbox"
            checked={task.isComplete}
            onChange={() => toggleComplete(task.id)}
            className="mr-2 size-6 outline-none"
          />
          <span className={`${task.isComplete && 'text-white'} text-black dark:text-darkText text-lg`}>
            {task.text}
          </span>
        </div>

        <div className="flex space-x-4 ">
          {!task.isComplete && (
            <button onClick={() => toggleImportant(task.id)} className="p-2 rounded-full border dark:border-slate-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={`${isStarred ? "#FFD56D" : "none"}`}
                viewBox="0 0 24 24"
                strokeWidth={.5}
                stroke="currentColor"
                className="size-6"
                onClick={() => setIsStarred(!isStarred)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
            </button>
          )}

          <button onClick={() => deleteTask(task.id)} className="text-red-500 p-2 rounded-full border dark:border-slate-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

      </div>
    </div>
  );
}