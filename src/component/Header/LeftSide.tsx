import React, { useEffect, useState } from "react";
import { UserSelect } from "../userSelect";
// import { BurgerMenu } from "../BurgerMenu.tsx";
// import usePermissions from "../../hooks/usePermissions";
// import { BASE_URL } from "../../api/constants";
import axios from "axios";
import { useRecoilState, useRecoilValue } from "recoil";
import { userInfo } from "../../store/userInfo";
import { loctionPath, openMenu } from "../../store/search";
// import { useHistory, useLocation } from "react-router";
// import Borger from "../../assets/MenuSVG/borger.svg";
// import BackRight from "../../assets/MenuSVG/backRight.svg";
import {
  CircleContainer,
  DivUserWrapper,
  LeftSideWarper,
  LogoStyle,
  Notification,
} from "./StyleLeft";
interface IProps {
  nameFile?: string;
}
export const LeftSide = ({ nameFile }: IProps) => {
  const [profileOpen, setProfileOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  // const { isAdminUser, isSupportUser } = usePermissions();
  const [numberNotification, setNumberNotification] = useState(undefined);
  const userDetails = useRecoilValue(userInfo);
  const [valideOpenMenu, setValideOpenMenu] = useRecoilState(openMenu);
  const [Loctionpath, setLoctionPath] = useRecoilState(loctionPath);
  const email = userDetails.user.userPrincipalName;
  // useEffect(() => {
  //   if (isSupportUser) {
  //     axios
  //       .post(
  //         `${BASE_URL}/contactTickets/getOpenTicketsCount`,
  //         {},
  //         {
  //           withCredentials: true,
  //         }
  //       )
  //       .then((result) => {
  //         if (result.data.success) {
  //           setNumberNotification(result.data.tickets);
  //         }
  //       });
  //   } else {
  //     axios
  //       .post(
  //         `${BASE_URL}/contactTickets/getMyClosedTickets`,
  //         { email },
  //         {
  //           withCredentials: true,
  //         }
  //       )
  //       .then((result) => {
  //         if (result.data.success) {
  //           setNumberNotification(result.data.tickets);
  //         }
  //       });
  //   }
  // }, [isSupportUser]);
  // const history = useHistory();
  // const handelGoBack = () => {
  //   history.goBack();
  // };
  // const isAboutPage = useLocation();
  // useEffect(() => {
  //   if (isAboutPage.pathname !== "/") {
  //     {
  //       setLoctionPath(true);
  //     }
  //   } else {
  //     setLoctionPath(false);
  //   }
  // }, []);
  return (
    <LeftSideWarper>
      <UserSelect
        numberNotification={numberNotification}
        profileOpen={profileOpen}
      />

      {Loctionpath && (
        <CircleContainer profileOpen={Loctionpath}>
          {/* <LogoStyle src={BackRight} onClick={handelGoBack} /> */}
        </CircleContainer>
      )}

      {!Loctionpath && (
        <CircleContainer profileOpen={Loctionpath}>
          <LogoStyle
            // src={Borger}
            onClick={() => {
              setMenuOpen(true);
              setValideOpenMenu(true);
            }}
          />
        </CircleContainer>
      )}
      <DivUserWrapper>
        {numberNotification !== undefined && numberNotification !== 0 && (
          <Notification profileOpen={profileOpen}>
            <div>{numberNotification}</div>
          </Notification>
        )}
      </DivUserWrapper>

      {/* {<BurgerMenu open={menuOpen} setMenuOpen={setMenuOpen} />} */}
    </LeftSideWarper>
  );
};
