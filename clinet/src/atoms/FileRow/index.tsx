import React, { useEffect, useState } from "react";
import styled from "styled-components";

import ExcelIcon from "../../assets/fileIcons/ExcelIcon.png";
import More from "../../assets/homepage/more.png";

export interface File {
  name: string;
  trace: string;
  type: string;
}

const TypeIcon: React.FC<{ type: string }> = ({ type }) => {
  let iconSrc;
  switch (type) {
    case "Excel":
      iconSrc = ExcelIcon;
      break;
    default:
      iconSrc = ExcelIcon;
      break;
  }
  return <Img src={iconSrc} alt="img" />;
};

export const FileRow: React.FC<File> = ({ name, trace, type }) => {
  return (
    <Row>
      <RightSideWrapper>
        <TypeIcon type={type} />
        <NameTraceWrapper>
          <h5>{name}</h5>
          <p>{trace}</p>
        </NameTraceWrapper>
      </RightSideWrapper>
      <MoreImg src={More} alt="more" />
    </Row>
  );
};

const Img = styled.img`
  height: 4vh;
  display: flex;
  margin: auto 0.5rem;
  /* @media (max-width: 768px) {
  } */
`;

const MoreImg = styled.img`
  height: 4vh;
  display: flex;
  margin: auto 0;
  padding: 0 0.5rem;
  @media (max-width: 768px) {
  }
`;

const Row = styled.div`
  width: 100%;
  height: 8vh;
  display: flex;
  justify-content: space-between;
  background-color: white;
  border: 1px solid white;
  border-bottom: 1px solid #cdcdcd;

  /* @media (max-width: 768px) {
    width: 80vw;
  } */
`;

const NameTraceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  h5 {
    margin: 0;
    margin-bottom: 0.2rem;
  }
  p {
    margin: 0;
    margin-bottom: 0.2rem;
    font-size: small;
    font-weight: 600;
    color: gray;
  }
  @media (max-width: 768px) {
  }
`;

const RightSideWrapper = styled.div`
  display: flex;
`;
