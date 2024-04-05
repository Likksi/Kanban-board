import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeTask } from "../store/taskSlice";
import css from "./task.module.css";

export const Task = ({ task, cardId }) => {
  const dispatch = useDispatch();

  return (
    <div className={css.task} key={task.id || Math.random()}>
      <Link className={css.link} to={`/tasks/${task.id}`}>
        {task.name}
      </Link>
      <span
        className={css.delete}
        title="delete"
        onClick={() => {
          dispatch(removeTask({ cardId: cardId, taskId: task.id }));
        }}
      >
        &#10006;
      </span>
    </div>
  );
};
