import { useState } from "react";

import { filterTasks } from "../../utilities/generalFunctions";

import { Flex, Input, Select, Button } from "@chakra-ui/react";
import { FcTodoList } from "react-icons/fc";

export const Header = ({ addNewTask, setTasks }) => {
  const [newTask, setNewTask] = useState("");
  const [selectValue, setSelectValue] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewTask(newTask);
    setNewTask("")
  };

  const handleChange = (value) => {
    setSelectValue(value)
    setTasks(filterTasks(value))
  }

  return (
    <Flex direction="column" gap="20px" alignItems="center" mb='2%'>
      <Flex gap="10px" align="center" mb='3%'>
        <FcTodoList
          style={{
            fontSize: "3rem",
            borderRadius: "30px",
            background: "#3E1784",
            padding: "2px",
          }}
        />
        <h1 className='text-[5rem] leading-4 text-[#C2C6DF]'>myToDoList</h1>
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
              maxLength='25'
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
              value={selectValue}
              onChange={(e) => handleChange(e.target.value)}
            >
              <option value="all">All</option>
              <option value="complete">Complete</option>
              <option value="pending">Pending</option>
            </Select>
          </Flex>
        </form>
      </Flex>
    </Flex>
  );
};
