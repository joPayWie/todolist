import { useState } from "react";

import { Flex, Input, Select, Button } from "@chakra-ui/react";
import { FcTodoList } from "react-icons/fc";

export const Header = ({ addNewTask }) => {
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewTask(newTask);
  };

  return (
    <Flex direction="column" gap="20px" alignItems="center">
      <Flex gap="10px" align="center">
        <FcTodoList
          style={{
            fontSize: "3rem",
            borderRadius: "30px",
            background: "#3E1784",
            padding: "2px",
          }}
        />
        <h1>myToDoList</h1>
      </Flex>
      <Flex gap="10px">
        <form onSubmit={handleSubmit} autoComplete="off">
          <Flex gap="10px" align="center" mb="20px">
            <Input
              type="text"
              placeholder="Enter a new task"
              value={newTask}
              name="newTask"
              id="newTask"
              bg="white"
              color="#6C65C2"
              size="lg"
              onChange={(e) => setNewTask(e.target.value)}
            />
            <Button type="submit" colorScheme='purple' bg="#872bc5" color="white">
              Add task
            </Button>
          </Flex>
          <Flex direction="column">
            <label htmlFor="filterStatus" style={{ alignSelf: "start" }}>
              Filter tasks
            </label>
            <Select
              placeholder="Select an option"
              id="filterStatus"
              name="filterStatus"
              bg="white"
              color="#6C65C2"
              fontWeight="bold"
              size="lg"
            >
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
            </Select>
          </Flex>
        </form>
      </Flex>
    </Flex>
  );
};