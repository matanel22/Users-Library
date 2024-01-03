import React, { useState } from "react";
import styled from "styled-components";
import { SubmitHandler, useForm } from "react-hook-form";

import { ArrOfTypeForm } from "./arrOfTypeForm";
import { MyData } from "../Home";
import { v4 as uuidv4 } from "uuid";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  setJsonData: React.Dispatch<React.SetStateAction<MyData[]>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  jsonData: MyData[];
}
export const AddUser: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  setJsonData,
  jsonData,
  setIsOpen,
}) => {
  const {
    register,
    reset,
    formState: { errors, isDirty, isValid },
    handleSubmit,
  } = useForm<MyData>({
    mode: "onChange",
  });

  function isValidEmail(email: string) {
    const isDuplicateEmail = jsonData.some((user) => email === user.email);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidFormat = emailRegex.test(email);

    return !isDuplicateEmail && isValidFormat;
  }
  const registerPrj: SubmitHandler<MyData> = async (data) => {
    isValidEmail(data.email);
    data.id = uuidv4();
    setJsonData((prev) => [...prev, data]);
    setIsOpen(false);
  };

  return (
    <WrapperModal>
      <ModalContainer isOpen={isOpen}>
        <ModalContent>
          <form onSubmit={handleSubmit(registerPrj)}>
            {ArrOfTypeForm.map((field) => {
              return (
                <FormGroup>
                  <Label>{field.label}</Label>
                  <Input
                    type={field.type}
                    // name={field.name}
                    // value={formData.date}
                    {...register(field.name as keyof MyData, {
                      required: true,
                    })}
                  />
                </FormGroup>
              );
            })}

            <Button type="submit">Submit</Button>
            <ModalCloseButton
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Close
            </ModalCloseButton>
          </form>
        </ModalContent>
      </ModalContainer>
    </WrapperModal>
  );
};

// export default addUser;

export const FormGroup = styled.div`
  // margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
`;

interface isOpenModal {
  isOpen: boolean;
  // onClose: () => void;
}

export const ModalContainer = styled.div<isOpenModal>`
  display: ${(props: { isOpen: boolean }) => (props.isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  margin-top: 5rem;
  // width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  max-width: 400px;
  margin: 0 auto;
`;

export const ModalCloseButton = styled.button`
  background-color: red;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
`;

const OpenModalButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
`;
const WrapperModal = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;
