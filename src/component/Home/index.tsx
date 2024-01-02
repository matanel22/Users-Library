import React, { useCallback, useEffect, useState } from "react";

import { DefaultContainer } from "../../containers/DefaultContainer";

import json from "../../Results/Results.json";
import { HomeWrapper, Param, SafetyHeader } from "./StyleToPage/StyleToHome";
import { CardsWrapperOne } from "./StyleToPage/StyleIndex";
import { Card } from "../../atoms/Card";
import { AddUser } from "../addUser";
import styled from "styled-components";
export interface MyData {
  title: string;
  firstName: string;
  lastName: string;
  email: string;
  user: string;
  country: string;
  city: string;
  street: { name: string; value: number };
  id: { name: string; value: number };
}

export const Home = () => {
  const [jsonData, setJsonData] = useState<any>([]);
  const [isOpen, setIsOpen] = useState<any>([]);
  const onClose = () => {};
  useEffect(() => {
    const tempJson = json.results.map((item) => {
      return {
        first: item.name.first,
        lastName: item.name.last,
        title: item.name.title,
        email: item.email,
        user: item.picture.medium,
        country: item.location.country,
        city: item.location.city,
        street: item.location.street,
        id: item.login.uuid,
      };
    });

    setJsonData(tempJson);
  }, []);

  return (
    <DefaultContainer background search nameFile={""}>
      <HomeWrapper>
        <AddUser isOpen={true} onClose={onClose} />
        <CardsWrapperOne>
          {jsonData &&
            jsonData.map((user: any) => (
              <Card
                isActive={true}
                id={user.id}
                emeil={user.email}
                firstName={user.first}
                lastName={user.lastName}
                title={user.title}
                Icon={user.user}
                country={user.country}
                city={user.city}
                street={user.street}
              />
            ))}
        </CardsWrapperOne>
      </HomeWrapper>
    </DefaultContainer>
  );
};
