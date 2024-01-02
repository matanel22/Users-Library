import { useState } from "react";

import { useRecoilValue } from "recoil";
import styled from "styled-components";

import { DefaultContainer } from "../../containers/DefaultContainer";
import { newSearch, searchWord } from "../../store/search";
import { userInfo } from "../../store/userInfo";

import { SearchField } from "./SearchField";

export const Search = () => {
  const user = useRecoilValue(userInfo);
  const searchTerm = useRecoilValue(searchWord);
  const canSearch = useRecoilValue(newSearch);
  const [isSearched, setIsSearched] = useState(false);
  const [canFetch, setCanFetch] = useState(false);
  const [file, setFile] = useState<string>("");

  // let fatchQueryResult = async ({ pageParam = 1 }) => {
  //   const { data } = await axios.get(
  //     `${BASE_URL}/search?word=${searchTerm}&page=${pageParam}&limit=${10}`,
  //     {
  //       withCredentials: true,
  //     }
  //   );
  //   if (data && (data == "אין תוצאות" || data == "Invalid search word")) {
  //     data.pages = [{ results: [], quote: [], traces: [] }];
  //     setCanFetch(false);
  //   } else if (data) {
  //     setCanFetch(true);
  //   }
  //   setIsSearched(true);
  //   return data;
  // };

  // const {
  //   isFetching,
  //   refetch,
  //   isLoading,
  //   hasNextPage,
  //   isFetchingNextPage,
  //   data,
  //   fetchNextPage,
  // } = useInfiniteQuery(
  //   "items",
  //   fatchQueryResult,

  //   {
  //     enabled: canSearch,
  //     getNextPageParam: (lastPage, pages) => {
  //       if (pages[0]?.results?.length > 0) {
  //         return lastPage?.next?.page;
  //       }
  //       return [];
  //     },
  //     getPreviousPageParam: (firstPage, allPages) => firstPage.prevCursor,
  //   }
  // );

  // useEffect(() => {
  //   refetch();
  // }, [canSearch]);

  // const elementRef = useRef<any>(null);

  // const lastTile = useCallback(
  //   (node) => {
  //     if (isLoading) return;
  //     if (elementRef.current) elementRef.current.disconnect();

  //     elementRef.current = new IntersectionObserver((entries) => {
  //       if (entries[0].isIntersecting) {
  //         fetchNextPage();
  //       }
  //     });

  //     if (node) elementRef?.current?.observe(node);
  //   },
  //   [isLoading, hasNextPage]
  // );

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

  justify-content: center;
  z-index: 2;
  margin-top: -1rem;
`;

const ResultsWrapper = styled.div<{ file: string }>`
  display: ${(props) => (props.file ? "none" : "")};
`;
