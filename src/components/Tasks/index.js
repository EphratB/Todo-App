import Task from "./Task";
import { useState } from "react";
import uuid from "react-uuid";

function Tasks() {
  const [post, setPost] = useState("");
  const [tasks, setTasks] = useState([
    {
      id: uuid(),
      taskname: "Walk the dog",
      status: true,
    },
    {
      id: uuid(),
      taskname: "Wash the car",
      status: false,
    },
    {
      id: uuid(),
      taskname: "Take out the garbage",
      status: false,
    },
    {
      id: uuid(),
      taskname: "Finish the lab",
      status: true,
    },
  ]);

  //Removie Task
  const handleRemoveTask = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  //Change status

  const handleChangeStatus = (id) => {
    const updatedTasks = [...tasks];
    updatedTasks.forEach((tasks) => {
      if (tasks.id === id && tasks.status === true) {
        tasks.status = false;
      } else if (tasks.id === id && tasks.status === false) {
        tasks.status = true;
      }
    });
    setTasks(updatedTasks);
  };

  //Deleting Every Tasks
  const handleClearTasks = (id) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(id);
    setTasks(updatedTasks);
  };

  // Adding new tasks
  const handleInputs = () => {
    console.log(post);
    const newTasks = [...tasks];
    newTasks.push({
      id: uuid(),
      taskname: post,
      status: false,
    });
    setTasks(newTasks);
  };

  return (
    <div>
      <div>
        <h1>These are the tasks:</h1>
      </div>
      {tasks.map((tasks, index) => (
        <Task
          key={index}
          id={tasks.id}
          name={tasks.taskname}
          status={tasks.status ? "Completed" : "In-Progress"}
          onStatus={handleChangeStatus}
          onRemove={handleRemoveTask}
        />
      ))}
      <div className="addtask">
        <button onClick={handleClearTasks}>Clear Tasks</button>
        <button onClick={handleInputs}>Add Tasks:</button> <nbsp />
        <input
          onChange={(e) => setPost(e.target.value)}
          type="text"
          placeholder="More tasks..."
        />
      </div>
    </div>
  );
}
export default Tasks;
