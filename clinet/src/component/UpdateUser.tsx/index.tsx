import React, { useEffect } from "react";
import { MyData } from "../Home";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Button,
  FormGroup,
  Input,
  Label,
  ModalCloseButton,
  ModalContainer,
  ModalContent,
} from "../addUser";

interface IProps {
  isOpen: boolean;
  sendUserUpdate: MyData;
  setJsonData: React.Dispatch<React.SetStateAction<MyData[]>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  jsonData: MyData[];
}

export const UpdateUser = ({
  sendUserUpdate,
  setJsonData,
  isOpen,
  jsonData,
  setOpen,
}: IProps) => {
  const {
    register,
    formState: { errors, isDirty, isValid },
    handleSubmit,
    reset,
  } = useForm<MyData>({
    mode: "onChange",
  });

  useEffect(() => {
    reset({
      title: sendUserUpdate.title,
      firstName: sendUserUpdate.firstName,
      lastName: sendUserUpdate.lastName,
      email: sendUserUpdate.email,
      country: sendUserUpdate.country,
      city: sendUserUpdate.city,
      street: sendUserUpdate.street,
      // user:sendUserUpdate.user
    });
  }, []);
  const registerPrj: SubmitHandler<MyData> = async (data) => {
    const index = jsonData.findIndex((obj) => obj.id === sendUserUpdate.id);
    const updatedObject = {
      ...jsonData[index],
      email: data.email,
      statusId: data.title,
      firstName: data.firstName,
      lastName: data.lastName,
      country: data.country,
      city: data.city,
      street: data.street,
    };

    const newArray: any = [
      ...jsonData.slice(0, index),
      updatedObject,
      ...jsonData.slice(index + 1),
    ];

    setJsonData(newArray);
    setOpen(false);
  };
  return (
    <ModalContainer isOpen={isOpen}>
      <ModalContent>
        <form onSubmit={handleSubmit(registerPrj)}>
          <FormGroup>
            <Label>Title:</Label>
            <Input type="text" {...register("title", { required: true })} />
          </FormGroup>
          {errors.title && <p>Title is required</p>}

          <FormGroup>
            <Label>First Name:</Label>
            <Input type="text" {...register("firstName", { required: true })} />
          </FormGroup>
          {errors.firstName && <p>First Name is required</p>}

          <FormGroup>
            <Label>Last Name:</Label>
            <Input type="text" {...register("lastName", { required: true })} />
          </FormGroup>
          {errors.lastName && <p>Last Name is required</p>}

          <FormGroup>
            <Label>Email:</Label>
            <Input type="email" {...register("email", { required: true })} />
          </FormGroup>
          {errors.email && <p>Email is required</p>}

          <FormGroup>
            <Label>Country:</Label>
            <Input type="text" {...register("country", { required: true })} />
          </FormGroup>
          {errors.country && <p>Country is required</p>}

          <FormGroup>
            <Label>City:</Label>
            <Input type="text" {...register("city", { required: true })} />
          </FormGroup>
          {errors.city && <p>City is required</p>}

          <FormGroup>
            <Label>Street:</Label>
            <Input type="text" {...register("street", { required: true })} />
          </FormGroup>
          {errors.street && <p>Street is required</p>}

          <Button type="submit">Submit</Button>
          <ModalCloseButton
            onClick={() => {
              setOpen(false);
            }}
          >
            Close
          </ModalCloseButton>
        </form>
      </ModalContent>
    </ModalContainer>
  );
};
