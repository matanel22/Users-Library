import { HeaderStyle, HeaderWarper } from "./Header.style";
import { SearchField } from "../Search/SearchField";

interface IProps {
  plus?: boolean;
  nameFile?: string;
}

export const Header = ({ plus, nameFile }: IProps) => {
  return (
    <>
      <HeaderWarper>{"Welcome to the user directory"}</HeaderWarper>
    </>
  );
};

export interface NotificationProps {
  profileOpen: boolean;
}
