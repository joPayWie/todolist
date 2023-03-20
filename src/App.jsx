// let uuid = self.crypto.randomUUID();

import { useState } from "react";
import { tasks } from "./data/tasks"
import { ToDoList } from "./components/ToDoList/ToDoList";
import { Footer } from "./components/Footer/Footer";
import {
  Box,
  Flex,
  HStack,
  VStack,
  Input,
  Select
} from "@chakra-ui/react";
import { FcTodoList } from 'react-icons/fc';

import "./App.css";

function App() {
  const [newTask, setNewTask] = useState("");

  const addNewTask = () => {

  }

  return (
    <div className="App">
      <VStack spacing="2%">
        <Box h='90%'>
            <Flex direction="column" gap='20px' alignItems="center">
              <Flex gap='10px' align={'center'}>
                  <FcTodoList style={{ fontSize: "3rem", borderRadius:'30px', background: "#3E1784", padding: "2px"}}/>
                  <h1>myToDoList</h1>
              </Flex>
              <Flex w='100%' gap='10px'>
                <Input
                  type="text"
                  placeholder="Enter a new task"
                  name="inputtedTask"
                  value={newTask}
                  onChange={(e) => {
                    setNewTask(e.target.value);
                  }}
                  bg="white"
                  color="#6C65C2"
                  size='lg'
                />
                <Select
                  placeholder="Select an option"
                  bg="white"
                  color="#6C65C2"
                  fontWeight="bold"
                  size='lg'
                >
                  <option value='all'>All</option>
                  <option value='completed'>Completed</option>
                  <option value='pending'>Pending</option>
                </Select>
              </Flex>

              <ToDoList />

            </Flex>
          </Box>

        <Footer/>

      </VStack>
    </div>
  );
}

export default App;
