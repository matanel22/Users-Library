import styled, { keyframes } from "styled-components";
// import { NotificationProps } from "./Header";

export const DivUserWrapper = styled.div`
  position: relative;
`;
export interface NotificationProps {
  profileOpen: boolean;
}
export const Notification = styled.div<NotificationProps>`
  position: absolute;
  /* z-index: 999; */
  /* overflow: visible; */
  display: flex;
  justify-content: center;
  align-items: center;
  background: red;
  border-radius: 50%;
  color: white;
  width: 1.3rem;
  height: 1.3rem;
  top: -0.5rem;
  left: -0.6rem;
  /* margin-left: 2.1rem;
  margin-top: -0.8rem; */
  opacity: ${(props) => (props.profileOpen ? "0" : "1")};
  transition: opacity 0.3s ease-in-out;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.8rem;
    font-weight: bold;
    margin-top: -0.2rem;
  }
`;

export const slideInFromLeft = keyframes`
  from {
    transform: translateX(0%);
    visibility: hidden;
  }
  to {
    transform: translateX(0%);
    visibility: visible;
  }
  `;

export const slideInFromRight = keyframes`
  from {
    transform: translateX(0);
    visibility: visible;
  }
  to {
    visibility: hidden;
    opacity: 0;
  }
`;

export const LeftSideWarper = styled.div`
  left: 0rem;

  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  overflow: hidden;
  .slide-in-from-left {
    display: visible;
    animation: ${slideInFromLeft} 0.5s ease-in-out forwards;
  }
  .close {
    animation: ${slideInFromRight} 0.5s ease-in-out forwards;

    /* display: none; */
  }
`;

export const LogoStyle = styled.img`
  left: 332px;
  gap: 10px;
  // padding-right: 1rem;
  -webkit-tap-highlight-color: transparent;
  :hover {
    cursor: pointer;
  }
`;
export const CircleContainer = styled.div<NotificationProps>`
  width: 40px; /* adjust the width and height as needed */
  height: 39px;
  border-radius: 30px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.5rem;
  ${(props) =>
    props.profileOpen ? "border: 2px solid rgba(38, 46, 58, 1);" : ""};
`;
