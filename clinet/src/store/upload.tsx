import { atom, selector } from "recoil";
// import { TreeNodeType } from "../components/TreeNode";
import axios from "axios";
// import { BASE_URL } from "../api/constants";

// export const selectedFolder = atom<
//   TreeNodeType | (TreeNodeType & { onClickFunction: Function }) | undefined
// >({
//   key: "selectedFolder",
//   default: undefined,
// });

// export const getParent = selector({
//   key: "getParent",
//   get: ({ get }) => {
//     const srcFolder = get(selectedFolder);

//     let parent = undefined;
//     if (!srcFolder?.parent) {
//       return undefined;
//     }
//     return axios
//       .get(`${BASE_URL}/tree/getFile/${srcFolder?.parent}`, {
//         withCredentials: true,
//       })
//       .then((res) => {
//         parent = res.data;
//         return parent;
//       });
//   },
// });
