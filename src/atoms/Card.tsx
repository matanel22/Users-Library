import styled from "styled-components";
import { CardWrapper, DivAllIcon, DivIcon } from "./CardStyle";

export interface IProps {
  firstName: string;
  lastName: string;
  title: string;
  color?: string;
  id: string;
  country: string;
  city: string;
  street: { name: string; value: string };
  Icon?: string;
  bgColor?: string;
  isActive: boolean;
  emeil: string;
  textSize?: Number;
}
export interface DivIconProps {
  color?: string;
}
export interface CardProps {
  color?: string;

  isActive: boolean;
}
export const Card = ({
  id,
  country,
  city,
  street,
  firstName,
  lastName,
  title,
  color,
  emeil,
  isActive,
  Icon,

  textSize,
}: IProps) => {
  return (
    <CardWrapper
      // onClick={() => {
      //   isActive && onClickFunc && onClickFunc();
      // }}
      color={color}
      isActive={isActive}
      className={isActive ? "" : "active"}
    >
      {Icon && (
        <ImgUser src={Icon} />
        // <DivAllIcon color={color}>
        //   <DivIcon color={color}></DivIcon>

        //   <Icon id={text} />
        // </DivAllIcon>
      )}
      <p
        style={{
          margin: "0",
          whiteSpace: "nowrap",
          fontSize: `${textSize}px`,
          lineHeight: "1.5rem",
        }}
      >
        {title}

        {firstName}

        {lastName}
        <br />
        {id}
        <br />
        {emeil}
        <br />

        {country}
        <br />
        {city}
        <br />
        {street.name}
        <br />
        {street.value}
      </p>
    </CardWrapper>
  );
};

const ImgUser = styled.img`
  border-radius: 30px;
  padding-bottom: 8px;
`;
