import { Flex, IconButton } from "@chakra-ui/react";
import { DeleteIcon, CheckIcon } from "@chakra-ui/icons";

export const Task = ({
  taskName,
  taskStatus,
  taskId,
  deleteTask,
  changeTaskStatus,
}) => {
  return (
    <Flex w="100%" justify="space-between" align="center" p="1%">
      <span
        className={`text-xl font-bold ${
          !taskStatus || `line-through text-slate-600`
        }`}
      >
        {taskName}
      </span>
      <Flex w="26%" justify="space-between">
        <IconButton
          colorScheme="green"
          aria-label="Check"
          icon={<CheckIcon />}
          onClick={changeTaskStatus(taskId)}
        />
        <IconButton
          colorScheme="red"
          aria-label="Delete"
          icon={<DeleteIcon />}
          onClick={() => deleteTask(taskId)}
        />
      </Flex>
    </Flex>
  );
};
