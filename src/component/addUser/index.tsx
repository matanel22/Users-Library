import React, { useState } from "react";
import styled from "styled-components";
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export const AddUser: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    options: [] as string[],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "select-multiple") {
      const selectedOptions = Array.from(
        (e.target as HTMLSelectElement).selectedOptions,
        (option) => option.value
      );
      setFormData((prevData) => ({
        ...prevData,
        [name]: selectedOptions,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <ModalContainer isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Date:</Label>
            <Input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>Time:</Label>
            <Input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
            />
          </FormGroup>

          <Button type="submit">Submit</Button>
        </form>
      </ModalContent>
    </ModalContainer>
  );
};

// export default addUser;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
`;

interface ModalProps {
  isOpen: boolean;
  // onClose: () => void;
}

const ModalContainer = styled.div<ModalProps>`
  display: ${(props: { isOpen: boolean }) => (props.isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  max-width: 400px;
  margin: 0 auto;
`;

const ModalCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const OpenModalButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
`;
