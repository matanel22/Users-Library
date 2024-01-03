import styled from "styled-components";
import { Header } from "../component/Header/";

interface IProps {
  children: React.ReactNode;
  background?: boolean;
  search?: boolean;
  plus?: boolean;
  overflow?: string;
  height?: number;
  nameFile?: string;
}

export const DefaultContainer = ({
  children,
  background,
  nameFile,
  search,
  plus,
  overflow,
}: IProps) => {
  return (
    <AppWrapper background overflow={overflow}>
      <Header plus={plus} nameFile={nameFile} /> {children}
    </AppWrapper>
  );
};

const AppWrapper = styled.div<IProps>`
  // direction: rtl;
  background: ${(props: IProps) => props.background === true && `#F6F8FB`};
  overflow: ${(props) => props.overflow};
  background-size: cover;
  position: relative;
  /* height: unset; */
  height: ${(props) => (props?.height ? `${props.height}%` : "unset")};
  min-height: 100vh;
  min-width: 100vw;
  overflow-y: auto;
`;
