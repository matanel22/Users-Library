import styled from "styled-components";
import { CardProps } from "./Card";
import { DivIconProps } from "./Card";

export const CardWrapper = styled.div<CardProps>`
  background-color: #e9e3ea;
  overflow: hidden;
  text-overflow: ellipsis
  Padding:10px, 30px, 10px, 30px;
  margin: 0.5rem 0.5rem 0 0.5rem;
  width: 30vw;
  height: 30vh;
  border-radius: 30px;
 
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  font-size: medium;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  &.active {
    &::before {
      content: "";
      background-color: #c7c7c7;
      opacity: 0.4;
      z-index: 2;
      border-radius: 30px;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
    }
    &::after {
      position: absolute;
      align-self: center;
      content: "בקרוב..";
      font-size: 1.5rem;
      font-weight: 600;
      transform: rotate(340deg);
      color: red;
      z-index: ;
    }
  }
`;
export const DivIcon = styled.div<DivIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  margin-left: 0.5rem;
  opacity: 0.2;
  border-radius: 1.5rem;
  width: 2.5rem;
  height: 2.5rem;
  z-index: 3;
`;

export const DivAllIcon = styled.div<DivIconProps>`
  position: relative;
  // margin-top: 1.5rem;
  // padding-top: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
