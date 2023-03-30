import { useState } from "react";
import { setLocalStorage, getLocalStorage } from "./utilities/LocalStorage";


import { Header } from "./components/Header/Header";
import { List } from "./components/List/List";
import { Footer } from "./components/Footer/Footer";

import { Flex, VStack } from "@chakra-ui/react";

import "./App.css";

function App() {
  const [tasks, setTasks] = useState(getLocalStorage("tasks") || []);
  const [alert, setAlert] = useState(false);

  const addNewTask = (newTask) => {
    if (newTask === "") {
      setAlert(true)
    }
    if (newTask !== "") {
      setAlert(false)
      const newTaskArray = [
        ...tasks,
        { id: self.crypto.randomUUID(), taskName: newTask, taskStatus: false },
      ];
      setTasks(newTaskArray);
      setLocalStorage("tasks", newTaskArray);
    }
  };

  const deleteTask = (id) => {
    const currentTaskArray = getLocalStorage("tasks");
    const filteredTaskArray = currentTaskArray.filter((task) => task.id !== id);
    setTasks(filteredTaskArray);
    setLocalStorage("tasks", filteredTaskArray);
  };

  return (
    <div className="App">
      <VStack spacing='15%'>
        <Flex h="90%" direction="column" align="center" p="3%">
          <Header addNewTask={addNewTask} setTasks={setTasks} alert={alert} setAlert={setAlert} />
          <List tasks={tasks} deleteTask={deleteTask} setTasks={setTasks} setAlert={setAlert} />
        </Flex>
        <Footer />
      </VStack>
    </div>
  );
}

export default App;
