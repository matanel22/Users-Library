import { ReactNode } from "react";
import { useQueryClient } from "react-query";
// import { Redirect, Route } from "react-router";
import { useRecoilValue } from "recoil";

interface IProps {
  children: ReactNode;
  path: string;
  exact: boolean;
}

export const PrivateRoute = ({ children, ...rest }: IProps) => {
  return (
    <></>
    //   <Route
    //     {...rest}
    //     render={({ location }) =>
    //       user.hasPermission ? (
    //         children
    //       ) : (
    //         <Redirect
    //           to={{
    //             pathname: "/login",
    //             state: { from: location },
    //           }}
    //         />
    //       )
    //     }
    //   />
  );
};
