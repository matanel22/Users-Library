import { useState } from "react";

import { useRecoilValue } from "recoil";
import styled from "styled-components";

import { DefaultContainer } from "../../containers/DefaultContainer";

import { SearchField } from "./SearchField";

export const Search = () => {
  const [isSearched, setIsSearched] = useState(false);
  const [canFetch, setCanFetch] = useState(false);
  const [file, setFile] = useState<string>("");

  return (
    <DefaultContainer background>
      <SearchField />
    </DefaultContainer>
  );
};

const FileViewWrapper = styled.div`
  position: absolute;
  display: flex;
  background-color: white;
  width: 100vw;
  border-radius: 30px;
  justify-content: center;
  z-index: 2;
  margin-top: -1rem;
`;

const ResultsWrapper = styled.div<{ file: string }>`
  display: ${(props) => (props.file ? "none" : "")};
`;
