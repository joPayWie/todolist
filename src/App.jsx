// let uuid = self.crypto.randomUUID();

import { useState } from "react";
import { setLocalStorage } from "./utilities/LocalStorage"
import { Header } from "./components/Header/Header"
import { List } from "./components/List/List";
import { Footer } from "./components/Footer/Footer";

import { Flex, VStack } from "@chakra-ui/react";

import "./App.css";

function App() {
  
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  const addNewTask = (newTask) => {
    if (newTask !== '') {
      const newTaskArray = [
        ...tasks,
        { id: self.crypto.randomUUID(), taskName: newTask, taskStatus: false },
      ]
      setTasks(newTaskArray);
      setLocalStorage("tasks", newTaskArray); 
    }
  };

  const deleteTask = (id) => {
    console.log(id)
  }

  return (
    <div className="App">
      <VStack spacing="3%">
        <Flex h="90%" direction="column" align='center' p='3%'>
          <Header addNewTask={addNewTask}/>
          <List tasks={tasks} deleteTask={deleteTask}/>
        </Flex>
        <Footer />
      </VStack>
    </div>
  );
}

export default App;
