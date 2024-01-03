import { atom } from "recoil";

export interface UserInfo {
  permissions?: Array<string>;
  hasPermission: boolean;
  user?: any;
}

export const userInfo = atom<UserInfo>({
  key: "userInfo",
  default: {
    permissions: [],
    hasPermission: false,
    user: {},
  },
});
