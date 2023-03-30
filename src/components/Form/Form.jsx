import { useState } from "react";

import { Stack, ButtonGroup, Button } from "@chakra-ui/react";

export const Form = ({ onCancel, taskName, taskId, editTaskName }) => {
  const [nameInput, setNameInput] = useState(taskName);

  return (
    <form
      autoComplete="off"
      onSubmit={(e) => {
        e.preventDefault();
        editTaskName(taskId, nameInput);
        onCancel();
      }}
    >
      <Stack spacing={3}>
        <label htmlFor="task-name" style={{ fontWeight: "bold" }}>
          Edit task name
        </label>
        <input
          type="text"
          id="task-name"
          style={{
            padding: "3px",
            border: "#6C65C2 solid 1px",
            borderRadius: "5px",
          }}
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        />
        <ButtonGroup display="flex" justifyContent="flex-end">
          <Button colorScheme='red' onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit" colorScheme="blue">
            Save
          </Button>
        </ButtonGroup>
      </Stack>
    </form>
  );
};
