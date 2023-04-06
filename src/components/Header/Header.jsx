import { useState } from "react";

import { filterTasks } from "../../utilities/generalFunctions";
import { getLocalStorage, setLocalStorage } from "../../utilities/LocalStorage";

import {
  Flex,
  Input,
  Select,
  Button,
  Alert,
  AlertIcon,
  AlertDescription,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  useDisclosure,
} from "@chakra-ui/react";
import { FcTodoList } from "react-icons/fc";

export const Header = ({ addNewTask, setTasks, alert, setAlert, selectValue, setSelectValue }) => {
  const [userName, setUserName] = useState(getLocalStorage("userName") || "");
  const { isOpen, onClose } = useDisclosure(
    userName === "" && { defaultIsOpen: true }
  );
  const [newTask, setNewTask] = useState("");


  const handleUserNameSubmit = (e) => {
    e.preventDefault();
    setLocalStorage("userName", userName);
    onClose();
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewTask(newTask);
    setNewTask("");
  };

  const handleChange = (value) => {
    setSelectValue(value);
    setAlert(false);
    setTasks(filterTasks(value));
  };

  return (
    <>
      <Flex direction="column" gap="20px" alignItems="center" mb="2%">
        <Flex gap="10px" align="center" mb="5%">
          <FcTodoList
            style={{
              fontSize: "3rem",
              borderRadius: "30px",
              background: "#3E1784",
              padding: "2px",
            }}
          />
          <h1 className="text-[5rem] leading-4 text-[#C2C6DF]">myToDoList</h1>
        </Flex>
        <h2 className="text-[1.75rem] md:text-[2rem] leading-4 text-[#6b4eca] mb-3 italic self-end">
          Hello, <span className='text-white font-bold underline decoration-[#9892e2] not-italic decoration-double decoration-1'>{userName}</span> !
        </h2>

        <Flex gap="10px">
          <form onSubmit={handleSubmit} autoComplete="off">
            <Flex direction="column">
              <Flex gap="10px" align="center" mb="20px">
                <Input
                  type="text"
                  placeholder="Enter a new task"
                  value={newTask}
                  name="newTask"
                  id="newTask"
                  bg="white"
                  color="#6C65C2"
                  focusBorderColor='#6C65C2'
                  size="lg"
                  maxLength="25"
                  onChange={(e) => setNewTask(e.target.value)}
                />
                <Button
                  type="submit"
                  colorScheme="purple"
                  bg="#872bc5"
                  color="white"
                >
                  Add task
                </Button>
              </Flex>

              {alert && (
                <Alert
                  status="error"
                  color="black"
                  borderRadius="md"
                  fontSize="xs"
                  p="2"
                >
                  <AlertIcon />
                  <AlertDescription>
                    You entered an empty task. Please write something.
                  </AlertDescription>
                </Alert>
              )}
            </Flex>
            <Flex direction="column" mt={alert && "10px"}>
              <label htmlFor="filterStatus" style={{ alignSelf: "start" }}>
                Filter tasks
              </label>
              <Select
                placeholder="Select an option"
                id="filterStatus"
                name="filterStatus"
                bg="white"
                color="#6C65C2"
                focusBorderColor='#6C65C2'
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

      <AlertDialog isOpen={isOpen}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold" color="black">
              Welcome there!
            </AlertDialogHeader>
            <form onSubmit={handleUserNameSubmit} autoComplete="off">
              <AlertDialogBody color="black">
                Please enter your name.
                <Input
                  type="text"
                  placeholder="Your name"
                  value={userName}
                  name="userName"
                  id="userName"
                  bg="white"
                  color="#6C65C2"
                  focusBorderColor='#6C65C2'
                  size="lg"
                  maxLength="25"
                  onChange={(e) => setUserName(e.target.value)}
                  required
                />
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button
                type='submit'
                colorScheme="purple">
                  Confirm
                </Button>
              </AlertDialogFooter>
            </form>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};
