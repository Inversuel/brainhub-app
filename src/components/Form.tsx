import { useForm, Controller, SubmitHandler } from "react-hook-form";
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
  FlexboxProps,
  useColorMode,
  Box,
  useToast,
} from "@chakra-ui/react";
import { User } from "../Interface/User";
import ReactDatePicker from "react-datepicker";
import { motion } from "framer-motion";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

export const Form = () => {
  const {
    handleSubmit,
    register,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm<User>();
  const toast = useToast();
  const { colorMode, toggleColorMode } = useColorMode();
  const ClassNameForDataPicker =
    colorMode === "light"
      ? "chakra-input css-1c6j008"
      : "chakra-input css-1rddv4z";

  const onSubmit: SubmitHandler<User> = (data: User) => {
    fetch("http://localhost:4000/event",{
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(data => {
      toast({
        title: 'EVENT created !',
        description: "",
        status: 'success',
        duration: 8000,
        isClosable: true,
      })
    })
    .catch((error) => {
      toast({
        title: 'Event error !',
        description: error.message,
        status: 'error',
        duration: 8000,
        isClosable: true,
      })
    });
    reset()
  };
  console.log(errors);

  const FlexMotion = motion(Flex);
  const FromLabelMotion = motion(FormLabel);
  const HeadingMotion = motion(Heading);
  const variants = {
    hidden: { opacity: 0, y: "-100vh" },
    visible: {
      opacity: 1,
      y: "0vh",
      transition: { duration: 0.5, staggerChildren: 0.4 },
    },
  };

  const variantsH = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, delay: 0.3 } },
  };

  const variantsI = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <>
      <FlexMotion
        initial="hidden"
        animate="visible"
        exit="visible"
        variants={variants}
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
          <Box
            display="flex"
            justifyContent="space-between"
            flexDirection="row"
          >
            <HeadingMotion
              variants={variantsH}
              lineHeight={1.1}
              fontSize={{ base: "2xl", md: "3xl" }}
            >
              BrainHub
            </HeadingMotion>
            {colorMode === "light" ? (
              <Box _hover={{ cursor: "pointer" }}>
                <BsFillMoonFill onClick={toggleColorMode} />
              </Box>
            ) : (
              <Box _hover={{ cursor: "pointer" }}>
                <BsFillSunFill onClick={toggleColorMode} />
              </Box>
            )}
          </Box>

          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl id="firstName" isRequired >
              <FromLabelMotion variants={variantsI}>First Name</FromLabelMotion>
              <Input
                type="text"
                {...register("firstName", { required: "This is requried" })}
              />
              <FormErrorMessage>
                {errors.firstName && errors.firstName.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl id="lastName" isRequired >
              <FromLabelMotion variants={variantsI}>Last Name</FromLabelMotion>
              <Input
                type="text"
                {...register("lastName", { required: "This is requried" })}
              />
              <FormErrorMessage>
                {errors.lastName && errors.lastName.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl id="email" isRequired >
              <FromLabelMotion variants={variantsI}>
                Email address
              </FromLabelMotion>
              <Input
                placeholder="your-email@example.com"
                _placeholder={{ color: "gray.500" }}
                type="email"
                {...register("email", { required: "This is requried" })}
              />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl id="eventDate" isRequired >
              <FromLabelMotion variants={variantsI}>Event Date</FromLabelMotion>
              <Controller
                control={control}
                    {...register("email", { required: "This is requried" })}
                    name="eventDate"
                render={({ field: { onChange, onBlur, value, ref } }) => (
                  <ReactDatePicker
                    onChange={onChange}
                    onBlur={onBlur}
                    className={ClassNameForDataPicker}
                    timeIntervals={15}
                    dateFormat="yyyy/MM/dd"
                    timeFormat="p"
                    todayButton="Today"
                    selected={value}
                    required
                    disabledKeyboardNavigation
                    data-cy="eventData"
                    id="eventDateId"
                    placeholderText="Event date"
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
                  isLoading={isSubmitting}
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
      </FlexMotion>
    </>
  );
};
