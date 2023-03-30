import React from "react";

import { Form } from "../Form/Form";

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
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton
} from "@chakra-ui/react";

import { DeleteIcon, CheckIcon, EditIcon } from "@chakra-ui/icons";

export const Task = ({
  taskName,
  taskStatus,
  taskId,
  deleteTask,
  changeTaskStatus,
  editTaskName,
  setAlert
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    isOpen: isOpenEditPopover,
    onOpen: onOpenEditPopover,
    onClose: onCloseEditPopover
  } = useDisclosure();

  return (
    <>
      <Flex w="100%" justify="space-between" align="center" p="1%">
        <span
          className={`text-xl font-bold ${
            taskName.length > 16 && `w-2/3 text-left`
          } ${!taskStatus || `line-through text-slate-600`}`}
        >
          {taskName}
        </span>
        <Flex w="32.5%" justify="space-between">
          <IconButton
            colorScheme={taskStatus ? "blackAlpha" : "green"}
            size="sm"
            aria-label="Check task"
            icon={<CheckIcon />}
            onClick={() => changeTaskStatus(taskId)}
          />

          <Popover
            isOpen={isOpenEditPopover}
            onOpen={onOpenEditPopover}
            onClose={onCloseEditPopover}
            placement="bottom"
            closeOnBlur={false}
          >
            <PopoverTrigger>
              <IconButton
                colorScheme="yellow"
                size="sm"
                aria-label="Edit"
                icon={<EditIcon />}
                onClick={() => setAlert(false)}
              />
            </PopoverTrigger>
            <PopoverContent p={5}>
              <PopoverArrow />
              <PopoverCloseButton />
              <Form
                onCancel={onCloseEditPopover}
                taskName={taskName}
                taskId={taskId}
                editTaskName={editTaskName}
              />
            </PopoverContent>
          </Popover>

          <IconButton
            colorScheme="red"
            size="sm"
            aria-label="Delete"
            icon={<DeleteIcon />}
            onClick={() => { onOpen()
            setAlert(false)}}
          />
        </Flex>
      </Flex>
      <AlertDialog isOpen={isOpen} onClose={onClose}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold" color="black">
              Warning
            </AlertDialogHeader>

            <AlertDialogBody color="black">
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button colorScheme="blue" onClick={onClose}>
                No, cancel
              </Button>
              <Button
                colorScheme="red"
                onClick={() => deleteTask(taskId)}
                ml={3}
              >
                Yes, delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};
