import React, {useState} from "react";
import {TaskAddInput} from "./input/TaskAddInput";
import {TaskCardDeleteButton} from "./button/TaskCardDeleteButton";
import {TaskCardTitle} from "./TaskCardTitle";
import {Tasks} from "./Tasks";
import {Draggable} from "react-beautiful-dnd";

export const TaskCard = ({taskCard, taskCardsList, setTaskCardsList, index}) => {
  const [inputText, setInputText] = useState("")
  const [taskList, setTaskList] = useState([])


  return (
    <Draggable draggableId={taskCard.id} index={index}>
      {(provided) => (
        <div
          className="taskCard"
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <div className="taskCardTitleAndTaskCardDeleteButtonArea"
            {...provided.dragHandleProps}>
            <TaskCardTitle/>
            <TaskCardDeleteButton
              taskCard={taskCard}
              taskCardsList={taskCardsList}
              setTaskCardsList={setTaskCardsList}/>
          </div>
          <TaskAddInput
            inputText={inputText}
            setInputText={setInputText}
            setTaskList={setTaskList}
            taskList={taskList}
          />
          <Tasks
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
      )}
    </Draggable>
  )
}