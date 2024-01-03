import styled from "styled-components";

import { useState } from "react";

export const SearchField = () => {
  const [lastSearch, setLastSearch] = useState(false);
  const [arrLstSearch, setArrLstSearch] = useState<Array<string>>([]);

  return (
    <div>
      <SearchWarper>
        <SearchFieldWarper>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              // handleSearch();
            }}
          >
            <input
              onClick={() => {
                setLastSearch(true);
              }}
              onBlur={(e) => {
                setTimeout(() => {
                  setLastSearch(false);
                }, 520);
              }}
            />

            <button type="submit" onClick={() => {}}></button>
          </form>
        </SearchFieldWarper>
      </SearchWarper>
      {/* <Abso>
        {lastSearch &&
          arrLstSearch.map((item) => {
            return <LastSearches setSearchTerm={setSearchTerm} name={item} />;
          })}
      </Abso> */}
    </div>
  );
};

// const Abso = styled.div`
//   position: absolute;
//   right: 1rem;
//   background-color: #f3efef;
//   width: 90%;
//   z-index: -1;
//   border-top-left-radius: 10px;
//   border-top-right-radius: 10px;
//   border-bottom-left-radius: 20px;
//   border-bottom-right-radius: 20px;
// `;

const SearchFieldWarper = styled.div`
  width: 90%;
  margin-right: 0.5rem;

  form {
    display: flex;
    border-radius: 1rem;
    padding: 0.2rem 0.5rem;
    background: "#F6F8FB";
    align-items: center;
    width: 100%;
    input {
      border: unset;
      width: 100%;
      outline: none;
      font-size: 18px;
    }
    svg {
      height: 1rem;
      width: 1rem;
    }
    button {
      background: none;
      border: unset;
      display: flex;
      align-items: center;
    }
  }
`;
const SearchWarper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 1rem;
  border-radius: 30px;
  align-items: center;
`;
