import { getLocalStorage, setLocalStorage } from "../../utilities/LocalStorage"
import { filterTasks } from "../../utilities/generalFunctions";

import { Task } from "../Task/Task";

import { Flex } from "@chakra-ui/react";

export const List = ({ tasks, deleteTask, setTasks, setAlert, selectValue }) => {

  const changeTaskStatus = (id) => {
    setAlert(false)    
    let changedArray = getLocalStorage('tasks').map((task) => {
      if (task.id === id) {
        return { ...task, taskStatus: !task.taskStatus };
      }
      return task;
    });
    setTasks(filterTasks(selectValue, changedArray));
    setLocalStorage("tasks", changedArray);
  };

  const editTaskName = (id, value) => {
    let changedArray = getLocalStorage('tasks').map((task) => {
      if (task.id === id) {
        return { ...task, taskName: value };
      }
      return task;
    });
    setTasks(filterTasks(selectValue, changedArray));
    setLocalStorage("tasks", changedArray);
  }

  return (
    <Flex
      bgImage="url('/notebook.jpg')"
      bgRepeat="repeat-y"
      mt="4%"
      w="100%"
      color="black"
      borderRadius="10px"
      p='2%'
      pt={{ base: "0px", lg: "0px" }}
      justify="center"
      direction="column"
      shadow="lg"
    >
      <h1 className="text-6xl mb-2">Tasks:</h1>
      {tasks.length === 0 ? (
        <h2 className="text-xl font-bold max-w-fit text-slate-600 italic p-0.5">
          Oops! It seems that there are no tasks yet.<br></br> Please add a
          task or change the filter.
        </h2>
      ) : (
        tasks.map((task) => (
          <Task
            key={task.id}
            taskName={task.taskName}
            taskStatus={task.taskStatus}
            taskId={task.id}
            deleteTask={deleteTask}
            changeTaskStatus={changeTaskStatus}
            editTaskName={editTaskName}
            setAlert={setAlert}
          />
        ))
      )}
    </Flex>
  );
};
