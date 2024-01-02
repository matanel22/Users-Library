import React from "react";

import styled from "styled-components";

// import logo from "../../assets/homepage/maklar_logo.png";
import { useHistory, useLocation } from "react-router-dom";
// import { icons } from "react-icons";
import { useRecoilState } from "recoil";
import { loctionPath } from "../../store/search";
import { NotificationProps } from "./StyleLeft";
// import { NotificationProps } from "./Header";
interface IProps {
  nameFile?: string;
}
export const RightSide = ({ nameFile }: IProps) => {
  const history = useHistory();
  const [Loctionpath, setLoctionPath] = useRecoilState(loctionPath);
  const isAboutPage = useLocation();
  return (
    <>
      <SafetyHeader profileOpen={Loctionpath}>{nameFile}</SafetyHeader>
      {/* {!Loctionpath && (
        <RightSideWrapper
          onClick={() => {
            history.push("/");
          }}
        >
           <LogoStyle src={logo} /> 
        </RightSideWrapper>
      )} */}
    </>
  );
};

const RightSideWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0;
  cursor: pointer;
`;

const LogoStyle = styled.img`
  width: 2rem;
  aspect-ratio: 0.8;
  margin: 0;
  margin-top: 0.2rem;
  margin-right: 0.5rem;
  margin-left: 0.7rem;
`;

const CenterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  // margin-right: 0;
  cursor: pointer;
`;

const SafetyHeader = styled.div<NotificationProps>`
  width: 70vw;
  text-align: center;
  font-family: Assistant;
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 33px;
  /* identical to box height */
  border: none;
  ${(props) => (props.profileOpen ? " margin-left: 4rem" : "")};
`;
