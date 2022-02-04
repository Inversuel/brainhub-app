import {
  Box,
  Button,
  ButtonGroup,
  Container,
  TextField,
  Typography,
} from "@material-ui/core";
import { useState } from "react";
import React from "react";
import { Save, Clear } from "@material-ui/icons";
import { useForm } from "react-hook-form";

interface User {
  firstName: string;
  lastName: string;
  email: string;
  eventDate: Date;
}

const App = () => {

  const { register, handleSubmit, reset } = useForm<User>();

  const onSubmit = handleSubmit((data: User) => {
    console.log(data);
  });

  return (
    <>
      <Container maxWidth="xs">
        <Box
          px={3}
          py={2}
          component="form"
          onSubmit={onSubmit}
          sx={{ display: "flex", flexDirection: "column", justifyContent: 'center'}}
        >
          <Typography variant="h2" component="h2">
            BrainHub
          </Typography>
          <TextField
            required
            {...(register("firstName", { required: true }))}
            id="firstName"
            name="firstName"
            label="First Name"
            margin="dense"
            variant="outlined"
          />
          <TextField
            required
            {...(register("lastName", { required: true }))}
            id="lastName"
            name="lastName"
            label="Last name"
            margin="dense"
            variant="outlined"
          />
          <TextField
            {...(register("email", { required: true }))}
            required
            id="email"
            name="email"
            type="string"
            label="Email"
            margin="dense"
            variant="outlined"
          />
          <TextField
            {...(register("eventDate", { required: true }))}
            required
            id="eventDate"
            name="eventDate"
            type="datetime"
            placeholder="Event Date"
            margin="dense"
            variant="outlined"
          />
          <Box mt={3}>
            <ButtonGroup>
              <Button
                endIcon={<Clear />}
                variant="contained"
                color="secondary"
                type="reset"
              >
                
                Clear
              </Button>
              <Button
                type="submit"
                endIcon={<Save />}
                variant="contained"
                color="primary"
              >
                Submit
              </Button>
            </ButtonGroup>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default App;
//TODO
// Check field data
//  move to component
