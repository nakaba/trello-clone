import React from "react";
import {Task} from "./Task";
import {DragDropContext, Droppable} from "react-beautiful-dnd";

export const Tasks = ({taskList, setTaskList}) => {
  const handleDragEnd = (result) => {
    // タスクの並び替え 例）[1, 2, 3]の 1と 2を入れ替える
    const remove = taskList.splice(result.source.index, 1) // [2, 3]の状態になる
    taskList.splice(result.destination.index, 0, remove[0]) // [2, 1, 3]の状態になる
    setTaskList(taskList)
  }

  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {taskList.map((task, index) => (
                <div key={task.id}>
                  <Task
                    index={index}
                    task={task}
                    taskList={taskList}
                    setTaskList={setTaskList}
                  />
                </div>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}