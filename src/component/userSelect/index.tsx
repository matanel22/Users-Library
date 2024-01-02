import React from "react";
import { useRecoilValue } from "recoil";
import styled, { keyframes } from "styled-components";

import { userInfo } from "../../store/userInfo";
import usePermissions from "../../hooks/usePermissions";
// import { useHistory } from "react-router";

interface IProps {
  profileOpen: boolean;
  numberNotification?: number;
}

export const UserSelect = ({ profileOpen, numberNotification }: IProps) => {
  // const history = useHistory();
  const userdetails = useRecoilValue(userInfo);
  const { isAdminUser, isSupportUser } = usePermissions();
  return (
    <div>
      {userdetails.user.displayName && profileOpen && (
        <Options>
          <div className="option">{userdetails.user.displayName}</div>
          <div
            className="option"
            onClick={() => {
              // history.push("/contact");
            }}
          >
            {numberNotification !== undefined && numberNotification !== 0 && (
              <Notification>
                <div>{numberNotification}</div>
              </Notification>
            )}
            {isSupportUser ? "פניות" : "צור קשר"}
          </div>
          <div
            className="option"
            onClick={() => {
              // history.push("/favoritesUser");
            }}
          >
            {"מועדפים"}
          </div>
          {/* <div
            className="option"
            onClick={() => {
              history.push("/pageLinks");
            }}
          >
            {"קבצי לומדה"}
          </div> */}
          {isAdminUser && (
            <div
              className="option"
              onClick={() => {
                // history.push("/adminUpdates");
              }}
            >
              {"יצירת הודעות"}
            </div>
          )}
          {isAdminUser && (
            <div
              className="option"
              onClick={() => {
                // history.push("/dashboard");
              }}
            >
              {"דשבורד"}
            </div>
          )}
        </Options>
      )}
    </div>
  );
};

const Notification = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: red;
  border-radius: 50%;
  color: white;
  width: 1.3rem;
  height: 1.3rem;
  position: absolute;
  margin-right: 4.5rem;

  transition: opacity 0.3s ease-in-out;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.8rem;
    font-weight: bold;
    /* margin-top: -0.2rem; */
  }
`;

const Options = styled.div`
  position: absolute;
  top: 3.5rem;
  right: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 6rem;

  .option {
    font-weight: 600;
    padding: 1rem 0.5rem;
    background-color: white;
    width: 6rem;
    border: 1px solid lightgray;
  }

  a {
    color: black;
    font-weight: 600;
    text-decoration: none;
  }
`;
