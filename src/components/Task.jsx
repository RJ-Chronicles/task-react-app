import { useState } from "react";
import PrintTask from "./PrintTask";

const Task = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [save, setSave] = useState([]);
  const [error, setError] = useState(false);
  const handleTaskTitle = (e) => {
    const text = e.target.value;
    setTaskTitle(text);
  };
  const handleTaskDescription = (e) => {
    const text = e.target.value;
    setTaskDescription(text);
  };
  const handleSave = (e) => {
    if (taskDescription === "" || taskTitle === "") {
      setError(true);
      return;
    }
    setError(false);
    const inputObject = {
      title: taskTitle,
      description: taskDescription
    };
    //console.log(inputObject)

    //keep previous with new object
    setSave((prev) => [...prev, inputObject]);

    // console.log(save);
    setTaskDescription("");
    setTaskTitle("");
  };
  return (
    <div>
      <input
        type="text"
        id="title"
        name="title"
        value={taskTitle}
        placeholder=" Task Title"
        onChange={handleTaskTitle}
      />
      <input
        type="text"
        id="description"
        name="description"
        value={taskDescription}
        placeholder="Task Description"
        onChange={handleTaskDescription}
      />
      <button onClick={handleSave}> save </button>
      <hr />
      {error && <p>Please Provide valid input</p>}
      <PrintTask save={save} />
    </div>
  );
};
export default Task;
