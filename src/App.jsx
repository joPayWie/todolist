import { useState } from "react";
import { setLocalStorage, getLocalStorage } from "./utilities/LocalStorage";

import { filterTasks } from "./utilities/generalFunctions";

import { Header } from "./components/Header/Header";
import { List } from "./components/List/List";
import { Footer } from "./components/Footer/Footer";

import {
  Flex,
  VStack,
  Button,
  useDisclosure,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
} from "@chakra-ui/react";

import "./App.css";

function App() {
  const [tasks, setTasks] = useState(getLocalStorage("tasks") || []);
  const [alert, setAlert] = useState(false);
  const [deleteAllAlert, setDeleteAllAlert] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectValue, setSelectValue] = useState("");

  const addNewTask = (newTask) => {
    const currentTaskArray = getLocalStorage("tasks");
    if (newTask === "") {
      setAlert(true);
    }
    if (newTask !== "" && !currentTaskArray) {
      setAlert(false);
      const newTaskArray = [
        ...tasks,
        { id: self.crypto.randomUUID(), taskName: newTask, taskStatus: false },
      ];
      setSelectValue("all");
      setTasks(newTaskArray);
      setLocalStorage("tasks", newTaskArray);
    }
    if (newTask !== "" && currentTaskArray) {
      setAlert(false);
      const newTaskArray = [
        ...currentTaskArray,
        { id: self.crypto.randomUUID(), taskName: newTask, taskStatus: false },
      ];
      setSelectValue("all");
      setTasks(newTaskArray);
      setLocalStorage("tasks", newTaskArray);
    }
  };

  const deleteTask = (id) => {
    const currentTaskArray = getLocalStorage("tasks");
    const filteredTaskArray = currentTaskArray.filter((task) => task.id !== id);
    setTasks(filterTasks(selectValue, filteredTaskArray));
    setLocalStorage("tasks", filteredTaskArray);
  };

  const deleteAllStaks = () => {
    const emptyTaskArray = [];
    setTasks(emptyTaskArray);
    setLocalStorage("tasks", emptyTaskArray);
  };

  return (
    <div className="App">
      <VStack spacing="15%">
        <Flex h="90%" direction="column" align="center" p="3%">
          <Header
            addNewTask={addNewTask}
            setTasks={setTasks}
            alert={alert}
            setAlert={setAlert}
            selectValue={selectValue}
            setSelectValue={setSelectValue}
          />
          <List
            tasks={tasks}
            deleteTask={deleteTask}
            setTasks={setTasks}
            setAlert={setAlert}
            selectValue={selectValue}
          />
        </Flex>
        <Button my="15px" colorScheme="red" onClick={onOpen}>
          Delete all tasks
        </Button>
        <Footer />
      </VStack>

      <AlertDialog isOpen={isOpen} onClose={onClose}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold" color="black">
              Warning: you are deleting all current tasks!
            </AlertDialogHeader>

            <AlertDialogBody color="black">
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button colorScheme="blue" onClick={onClose}>
                No, cancel
              </Button>
              <Button colorScheme="red" onClick={deleteAllStaks} ml={3}>
                Yes, delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </div>
  );
}

export default App;
