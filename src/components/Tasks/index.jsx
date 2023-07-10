import { Task } from "../Task";
import styles from "./tasks.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useState } from "react";

export function Tasks({ tasks, onDelete, onComplete, handleAddTask }) {
  const [title, setTitle] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    handleAddTask(title);
    setTitle("");
  }

  function onChangeTitle(event) {
    setTitle(event.target.value);
  }

  const tasksQuantity = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted).length;

  return (
    <section className={styles.tasks}>
      <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        <input
          placeholder="Add a new task"
          type="text"
          onChange={onChangeTitle}
          value={title}
        />
        <button>
          Create <AiOutlinePlusCircle size={20} />
        </button>
      </form>

      <header className={styles.header}>
        <div>
          <p>Created tasks</p>
          <span>{tasksQuantity}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed tasks</p>
          <span>
            {completedTasks} of {tasksQuantity}
          </span>
        </div>
      </header>

      <div className={styles.list}>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={onDelete}
            onComplete={onComplete}
          />
        ))}
      </div>
    </section>
  );
}
