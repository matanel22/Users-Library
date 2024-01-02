import styled from "styled-components";
// import { NotificationProps } from "./Header";
export interface NotificationProps {
  profileOpen: boolean;
}
export const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const HeaderWarper = styled.div`
  z-index: 11;
  top: 0;
  left: 0;
  padding: 1rem 0rem 1.5rem 0rem;

  position: sticky;
  background-color: #ecdaef;

  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  margin: 0 0 1rem 0;
`;
//${(props) =>
// props.profileOpen ? "rgba(255, 255, 255, 1)" : "#F6F8FB"};
