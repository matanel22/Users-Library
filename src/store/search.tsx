import { atom } from "recoil";
// import { CardProps } from "../ArrOfObject";

export const searchWord = atom({
  key: "searchWord", // unique ID (with respect to other atoms/selectors)
  default: "", // default value (aka initial value)
});
interface ID {
  id: number;
}
export const newSearch = atom({
  key: "newSearch",
  default: false,
});

interface DataSearch {
  quat: [];
  results: [{ name: string; parent: string; text: string; _id: string }];
  roots: [[]];
  next: {};
}
export const dataSearch = atom({
  key: "dataSearch",
  default: {} as DataSearch,
});
export const openMenu = atom({
  key: "menu",
  default: false,
});
export const loctionPath = atom({
  key: "loction",
  default: false,
});
// export const SecondaryLevel = atom<CardProps[]>({
//   key: "id",
//   default: [],
// });
