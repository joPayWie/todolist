// let uuid = self.crypto.randomUUID();

import { useState } from "react";
import { setLocalStorage } from "./utilities/LocalStorage"
import { Header } from "./components/Header/Header"
import { List } from "./components/List/List";
import { Footer } from "./components/Footer/Footer";

import { Box, Flex, HStack, VStack, Input, Select, Button } from "@chakra-ui/react";

import "./App.css";

function App() {
  
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  const addNewTask = (newTask) => {
    const newTaskArray = [
      ...tasks,
      { id: self.crypto.randomUUID(), task: newTask, status: "pending" },
    ]
    setTasks(newTaskArray);
    localStorage.setItem("tasks", JSON.stringify(newTaskArray));
  };

  return (
    <div className="App">
      <VStack spacing="10%">
        <Box h="90%">
          <Header addNewTask={addNewTask}/>
          <List tasks={tasks} />
        </Box>
        <Footer />
      </VStack>
    </div>
  );
}

export default App;
