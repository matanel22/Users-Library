import { LeftSide } from "./LeftSide";

import { useRecoilState } from "recoil";
import { loctionPath } from "../../store/search";
import { HeaderStyle, HeaderWarper } from "./Header.style";
import { SearchField } from "../Search/SearchField";

interface IProps {
  plus?: boolean;
  nameFile?: string;
}

export const Header = ({ plus, nameFile }: IProps) => {
  return (
    <>
      <HeaderWarper>
        <HeaderStyle></HeaderStyle>
        <SearchField />
      </HeaderWarper>
    </>
  );
};

export interface NotificationProps {
  profileOpen: boolean;
}
