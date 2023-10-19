import React, {useState} from "react";
import {TaskCard} from "./TaskCard";
import {AddTaskCardButton} from "./button/AddTaskCardButton";
import {DragDropContext, Droppable} from "react-beautiful-dnd";

export const TaskCards = () => {
  const [taskCardsList, setTaskCardsList] = useState([{
    id: "0",
    draggableId: "item0"
  }])

  const handleDragEnd = (result) => {
    // タスクの並び替え 例）[1, 2, 3]の 1と 2を入れ替える
    const remove = taskCardsList.splice(result.source.index, 1) // [2, 3]の状態になる
    taskCardsList.splice(result.destination.index, 0, remove[0]) // [2, 1, 3]の状態になる
    setTaskCardsList(taskCardsList)
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="droppable" direction="horizontal">
        {(provided) => (
          <div
            className="taskCardsArea"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {taskCardsList.map((taskCard, index) => (
              <TaskCard
                key={taskCard.id}
                index={index}
                taskCard={taskCard}
                taskCardsList={taskCardsList}
                setTaskCardsList={setTaskCardsList}/>
            ))}
            {provided.placeholder}
            <AddTaskCardButton
              taskCardsList={taskCardsList}
              setTaskCardsList={setTaskCardsList}/>
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}