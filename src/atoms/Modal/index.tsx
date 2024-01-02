import React, { useRef, useEffect, useCallback } from "react";
import styled from "styled-components";
// import { MdClose } from "react-icons/md";
import { Dispatch } from "react";

const Background = styled.div`
  width: 100vw;
  height: 100%;
  top: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  z-index: 11;
  align-items: center;
`;

const ModalWrapper = styled.div`
  transition: opacity 1s;
  opacity: 1;

  width: auto;
  height: auto;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: flex;
  justify-content: center;

  position: fixed;
  z-index: 10;
  border-radius: 1rem;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  margin-top: 2rem;

  p {
    font-size: large;
    text-align: center;
    margin: 0;
    margin-bottom: 0.2rem;
  }
`;

// const CloseModalButton = styled(MdClose)`
//   cursor: pointer;
//   position: absolute;
//   top: 0.6rem;
//   left: 0.6rem;
//   width: 2rem;
//   height: 2rem;
//   padding: 0;
//   z-index: 10;
// `;

interface IProps {
  children: React.ReactNode;
  showModal: boolean;
  setShowModal: Dispatch<React.SetStateAction<boolean>>;
}

export const Modal = ({ children, showModal, setShowModal }: IProps) => {
  const modalRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const closeModal = (e: any) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  // const keyPress = useCallback(
  //   (e) => {
  //     if (e.key === "Escape" && showModal) {
  //       setShowModal(false);
  //     }
  //   },
  //   [setShowModal, showModal]
  // );

  // useEffect(() => {
  //   document.addEventListener("keydown", keyPress);
  //   return () => document.removeEventListener("keydown", keyPress);
  // }, [keyPress]);

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <ModalWrapper>
            <ModalContent>{children}</ModalContent>
            {/* <CloseModalButton
              aria-label="Close modal"
              onClick={() => setShowModal((prev) => !prev)}
            /> */}
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};
