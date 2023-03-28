import {
  useDisclosure,
  Button,
  Flex,
  IconButton,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { DeleteIcon, CheckIcon } from "@chakra-ui/icons";

export const Task = ({
  taskName,
  taskStatus,
  taskId,
  deleteTask,
  changeTaskStatus,
}) => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
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
            colorScheme={taskStatus ? 'blackAlpha' : 'green'}
            aria-label="Check"
            icon={<CheckIcon />}
            onClick={() => changeTaskStatus(taskId)}
          />
          <IconButton
            colorScheme="red"
            aria-label="Delete"
            icon={<DeleteIcon />}
            onClick={onOpen}
          />
        </Flex>
      </Flex>
      <AlertDialog
        isOpen={isOpen}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold' color='black'>
              Warning
            </AlertDialogHeader>

            <AlertDialogBody color='black'>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button colorScheme='blue' onClick={onClose}>
                No, cancel
              </Button>
              <Button colorScheme='red' onClick={() => deleteTask(taskId)} ml={3}>
                Yes, delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};
