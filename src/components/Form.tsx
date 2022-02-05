import { useForm, Controller } from "react-hook-form";
import React, { useState } from "react";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { User } from "../Interface/User";
import ReactDatePicker from "react-datepicker";

export const Form = () => {
  const {
    handleSubmit,
    register,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm();
  const [startDate, setStartDate] = useState(new Date());
  const onSubmit = (data: any) => {
    console.log(data);
  };
  console.log(errors);

  return (
    <>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack
          spacing={4}
          w={"full"}
          maxW={"md"}
          bg={useColorModeValue("white", "gray.700")}
          rounded={"xl"}
          boxShadow={"lg"}
          p={6}
          my={12}
        >
          <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
            BrainHub
          </Heading>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl id="firstName" isRequired isInvalid={errors.firstName}>
              <FormLabel>First Name</FormLabel>
              <Input
                type="text"
                {...register("firstName", { required: "This is requried" })}
              />
              <FormErrorMessage>
                {errors.firstName && errors.firstName.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl id="lastName" isRequired isInvalid={errors.lastName}>
              <FormLabel>Last Name</FormLabel>
              <Input
                type="text"
                {...register("lastName", { required: "This is requried" })}
              />
              <FormErrorMessage>
                {errors.lastName && errors.lastName.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl id="email" isRequired isInvalid={errors.email}>
              <FormLabel>Email address</FormLabel>
              <Input
                placeholder="your-email@example.com"
                _placeholder={{ color: "gray.500" }}
                type="email"
                {...register("email", { required: "This is requried" })}
              />
              <FormErrorMessage>
                {errors.name && errors.name.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl id="eventDate" isRequired isInvalid={errors.eventDate}>
              <FormLabel>Event Date</FormLabel>
              <Controller
                control={control}
                name="eventDate"
                render={({ field: { onChange, onBlur, value, ref } }) => (
                  <ReactDatePicker
                    onChange={onChange} // send value to hook form
                    onBlur={onBlur} // notify when input is touched/blur
                    className="chakra-input css-1c6j008"
                    showTimeInput
                    timeIntervals={15}
                    dateFormat="dd/MM/yyyy hh:MM"
                    timeFormat="p"
                    timeInputLabel="Time:"
                    todayButton="Today"
                    selected={value}
                    required
                  />
                )}
              />
              <FormErrorMessage>
                {errors.eventDate && errors.eventDate.message}
              </FormErrorMessage>
            </FormControl>

            <Stack spacing={6} mt={2}>
              <ButtonGroup>
                <Button
                  type="reset"
                  bg={"red.400"}
                  color={"white"}
                  _hover={{
                    bg: "red.500",
                  }}
                >
                  Clear
                </Button>
                <Button
                  type="submit"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Submit
                </Button>
              </ButtonGroup>
            </Stack>
          </form>
        </Stack>
      </Flex>
      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <Input type="text" placeholder="First Name" {...register("firstName", {required: true})} />
        <Input type="text" placeholder="Last Name" {...register("lastName", {required: true})} />
        <Input type="email" placeholder="Email" {...register("email", {required: true})} />
        <Input type="datetime" placeholder="Event Date" {...register("eventDate", {required: true})} />
        <Input type="submit" />
      </form> */}
    </>
  );
};
