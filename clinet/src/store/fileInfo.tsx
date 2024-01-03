import { atom } from "recoil";

interface FileProps {
  filename?: string;
  fileType?: string;
  fileSrc?: string;
}

export const fileInfo = atom<FileProps>({
  key: "fileInfo",
  default: { filename: undefined, fileType: undefined, fileSrc: undefined },
});

export const hirbotId = atom<string>({
  key: "id",
  default: "",
});
export const afterDelete = atom<boolean>({
  key: "delete",
  default: true,
});
export const nameFile = atom<string>({
  key: "name file",
  default: "חל'ג בנייד",
});
