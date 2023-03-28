import { TextInput } from "../TextInput/TextInput"

import { editTaskName } from "../../utilities/generalFunctions"

import { Stack, ButtonGroup, Button } from '@chakra-ui/react'

export const Form = ({ firstFieldRef, onCancel, taskName, taskId }) => {
    return (
      <Stack spacing={4}>
        <TextInput label='Task name' id='task-name' defaultValue={taskName} ref={firstFieldRef} />
        <ButtonGroup display='flex' justifyContent='flex-end'>
          <Button variant='outline' onClick={onCancel}>
            Cancel
          </Button>
          <Button colorScheme='teal' onClick={() => editTaskName(taskId)}>
            Save
          </Button>
        </ButtonGroup>
      </Stack>
    )
  }