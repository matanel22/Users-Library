import { ReactNode } from "react";

// import { Redirect, Route } from "react-router";

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
