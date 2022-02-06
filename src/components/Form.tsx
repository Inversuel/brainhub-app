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
  FlexboxProps,
  useColorMode,
  Box,
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
  } = useForm();

  const { colorMode, toggleColorMode } = useColorMode();
  const ClassNameForDataPicker =
    colorMode === "light"
      ? "chakra-input css-1c6j008"
      : "chakra-input css-1rddv4z";

  const onSubmit = (data: any) => {
    console.log(data);
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
            <FormControl id="firstName" isRequired isInvalid={errors.firstName}>
              <FromLabelMotion variants={variantsI}>First Name</FromLabelMotion>
              <Input
                type="text"
                {...register("firstName", { required: "This is requried" })}
              />
              <FormErrorMessage>
                {errors.firstName && errors.firstName.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl id="lastName" isRequired isInvalid={errors.lastName}>
              <FromLabelMotion variants={variantsI}>Last Name</FromLabelMotion>
              <Input
                type="text"
                {...register("lastName", { required: "This is requried" })}
              />
              <FormErrorMessage>
                {errors.lastName && errors.lastName.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl id="email" isRequired isInvalid={errors.email}>
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
                {errors.name && errors.name.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl id="eventDate" isRequired isInvalid={errors.eventDate}>
              <FromLabelMotion variants={variantsI}>Event Date</FromLabelMotion>
              <Controller
                control={control}
                name="eventDate"
                render={({ field: { onChange, onBlur, value, ref } }) => (
                  <ReactDatePicker
                    onChange={onChange} // send value to hook form
                    onBlur={onBlur} // notify when input is touched/blur
                    className={ClassNameForDataPicker}
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
      </FlexMotion>
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
