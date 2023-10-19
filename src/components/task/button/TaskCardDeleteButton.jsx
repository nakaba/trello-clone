import React from "react";

export const TaskCardDeleteButton = ({taskCard, taskCardsList, setTaskCardsList}) => {
  const taskCardDeleteButton = (id) => {
    // タスクカードを削除する
    setTaskCardsList(taskCardsList.filter((e) => e.id !== id))
  }

  return (
    <div>
      <button
        onClick={() => taskCardDeleteButton(taskCard.id)}
        className="taskCardDeleteButton">
        <i className="fas fa-times"></i>
      </button>
    </div>
  )
}