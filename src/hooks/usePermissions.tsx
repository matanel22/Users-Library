import { useRecoilValue } from "recoil";
import { userInfo } from "../store/userInfo";

const usePermissions = () => {
  const user = useRecoilValue(userInfo);
  const isAdminUser = user && user?.permissions?.includes("admin");
  const isContentManagerUser =
    user &&
    (user?.permissions?.includes("content-manager") ||
      user?.permissions?.includes("admin"));
  const isSupportUser =
    user &&
    (user?.permissions?.includes("support-user") ||
      user?.permissions?.includes("admin"));

  return { isContentManagerUser, isAdminUser, isSupportUser, user };
};

export default usePermissions;
