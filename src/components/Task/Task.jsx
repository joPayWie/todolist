import { setLocalStorage } from "../../utilities/LocalStorage";
import { getLocalStorage } from "../../utilities/LocalStorage";

import { Flex, IconButton } from "@chakra-ui/react";
import { DeleteIcon, CheckIcon } from "@chakra-ui/icons";

export const Task = ({ taskName, taskStatus, taskId, deleteTask }) => {
  return (
    <Flex w="100%" justify='space-between' align='center' p='1%'>
      <span className="text-xl font-bold">{taskName}</span>
      <Flex spacing="2%">
        <IconButton colorScheme='purple' aria-label="Check" icon={<CheckIcon />} />
        <IconButton colorScheme='purple' aria-label="Delete" icon={<DeleteIcon />} onClick={() => deleteTask(taskId)}/>
      </Flex>
    </Flex>
  );
};
