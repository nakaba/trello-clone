import React from "react";
import { v4 as uuidv4 } from 'uuid';

export const TaskAddInput = ({inputText, setInputText, taskList, setTaskList}) => {
  const handleSubmit = (event) => {
    event.preventDefault()
    // uuidライブラリでユニークキーを生成
    const taskId = uuidv4()

    // からの場合は中止
    if (inputText === "") {
      return
    }
    // カードを追加する
    setTaskList([
      ...taskList,
      {
        // 配列の長さをidにとる
        id: taskId,
        draggableId: `task-${taskId}`,
        text: inputText,
      }
    ])
    // フォームクリア
    setInputText("")
  }

  const handleChange = (event) => {
    setInputText(event.target.value)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="taskAddInput"
          type="text"
          value={inputText}
          placeholder="おかわり"
          onChange={handleChange}
        />
      </form>
    </div>
  )
}