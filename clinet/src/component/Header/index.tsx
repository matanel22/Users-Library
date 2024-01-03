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
        <SearchField />
      </HeaderWarper>
    </>
  );
};

export interface NotificationProps {
  profileOpen: boolean;
}
