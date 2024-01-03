import React, { useCallback, useEffect, useState } from "react";

import { DefaultContainer } from "../../containers/DefaultContainer";

import json from "../../Results/Results.json";
import { HomeWrapper, Param, SafetyHeader } from "./StyleToPage/StyleToHome";
import { CardsWrapperOne } from "./StyleToPage/StyleIndex";
import { Card } from "../../atoms/Card";
import { AddUser, Button } from "../addUser";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { UpdateUser } from "../UpdateUser.tsx";
import Plus from "../../SVG/plus.svg";
export interface MyData {
  title: string;
  firstName: string;
  lastName: string;
  email: string;
  user: string;
  country: string;
  city: string;
  street: string;
  id: string;
}

export const Home = () => {
  const [jsonData, setJsonData] = useState<MyData[]>([]);
  const [sendUserUpdate, setSendUserUpdate] = useState<MyData>();

  const [isOpenModalEdit, setIsOpenModalEdit] = useState(false);
  const [isOpenModalNewUser, setIsOpenModalNewUser] = useState(false);
  const onClose = () => {};
  const sendingOfUpdate = (id: string) => {
    const oneUserForEdit = jsonData.find((user) => user.id === id);
    if (oneUserForEdit) {
      setSendUserUpdate(oneUserForEdit);
    }
    setIsOpenModalEdit(true);
  };
  useEffect(() => {
    const tempJson = json.results.map((item) => {
      return {
        firstName: item.name.first,
        lastName: item.name.last,
        title: item.name.title,
        email: item.email,
        user: item.picture.medium,
        country: item.location.country,
        city: item.location.city,
        street: item.location.street.name,
        id: uuidv4(),
      };
    });

    setJsonData(tempJson);
  }, []);
  useEffect(() => {
    console.log(sendUserUpdate);
  }, [sendUserUpdate]);

  return (
    <DefaultContainer background search nameFile={""}>
      <Button
        onClick={() => {
          setIsOpenModalNewUser(true);
        }}
      >
        הוספת משתמש
      </Button>
      <HomeWrapper>
        <CardsWrapperOne>
          {jsonData &&
            jsonData.map((user) => (
              <React.Fragment key={user.id}>
                <Card
                  isActive={true}
                  id={user.id}
                  emeil={user.email}
                  firstName={user.firstName}
                  lastName={user.lastName}
                  title={user.title}
                  Icon={user.user}
                  country={user.country}
                  city={user.city}
                  street={user.street}
                  onClickFunc={() => {
                    sendingOfUpdate(user.id);
                  }}
                />
              </React.Fragment>
            ))}
        </CardsWrapperOne>
      </HomeWrapper>
      <AddUser
        isOpen={isOpenModalNewUser}
        setIsOpen={setIsOpenModalNewUser}
        onClose={onClose}
        setJsonData={setJsonData}
        jsonData={jsonData}
      />
      {sendUserUpdate && (
        <UpdateUser
          isOpen={isOpenModalEdit}
          sendUserUpdate={sendUserUpdate}
          setJsonData={setJsonData}
          jsonData={jsonData}
          setOpen={setIsOpenModalEdit}
        />
      )}
    </DefaultContainer>
  );
};

const NewUser = styled.img``;
