import { setLocalStorage } from "../../utilities/LocalStorage";
import { getLocalStorage } from "../../utilities/LocalStorage";

import { Task } from "../Task/Task";

import { Flex } from "@chakra-ui/react";

export const List = ({ tasks, deleteTask }) => {

  return (
    <Flex
      bgImage="url('/notebook.jpg')"
      bgRepeat="repeat-y"
      mt="3%"
      w="100%"
      color="black"
      borderRadius="10px"
      p={{base: '3%', lg:"2%"}}
      pt={{base: '0px', lg:'0px'}}
      justify="center"
      direction="column"
    >
      <h1 className="text-6xl mb-2">Tasks:</h1>
      {tasks.length === 0 ? (
          <h2 className="text-xl font-bold max-w-fit">
            Oops! It seems that there are no tasks yet. Please add a task.
          </h2>
      ) : (
        tasks.map((task) => (
          <Task
            key={task.id}
            taskName={task.taskName}
            taskStatus={task.taskStatus}
            taskId={task.id}
            deleteTask={deleteTask}
          ></Task>
        ))
      )}
    </Flex>
  );
};
