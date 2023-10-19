import React, {useState} from "react";

export const TaskCardTitle = () => {
  const [isClick, setIsClick] = useState(false)

  const [inputCardTitle, setInputCardTitle] = useState("朝ごはん")

  const handleClick = () => {
    setIsClick(true)
  }

  const handleChange = (event) => {
    setInputCardTitle(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (event.target[0].value === "") {
      return
    }
    setIsClick(false)
  }

  const handleBlur = (event) => {
    if (event.target.value === "") {
      setIsClick(true)
    } else {
      setIsClick(false)
    }
  }

  return (
    <div onClick={handleClick} className="taskCardTitleInputArea">
      {isClick ? (
        <form onSubmit={handleSubmit}>
          <input className="taskCardTitleInput"
                 type="text"
                 autoFocus
                 maxLength={10}
                 onChange={handleChange}
                 onBlur={handleBlur}
                 value={inputCardTitle}/>
        </form>
      ) : <h3>{inputCardTitle}</h3>}
    </div>
  )
}