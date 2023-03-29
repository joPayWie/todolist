import { useState } from "react";

import { Stack, ButtonGroup, Button } from "@chakra-ui/react";

export const Form = ({
  onCancel,
  taskName,
  taskId,
  editTaskName,
}) => {
  const [nameInput, setNameInput] = useState(taskName);

  return (
    <Stack spacing={2}>
        <label htmlFor="task-name" style={{ fontWeight: 'bold' }}>Task name</label>
        <input
          type="text"
          label="Task name"
          id="task-name"
          style={{ border: "#6C65C2 solid 1px", borderRadius: "5px" }}
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        />
        <ButtonGroup display="flex" justifyContent="flex-end">
          <Button variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button
            colorScheme="blue"
            onClick={() => {
              editTaskName(taskId, nameInput);
              onCancel();
            }}
          >
            Save
          </Button>
        </ButtonGroup>
    </Stack>
  );
};
