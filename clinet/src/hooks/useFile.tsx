import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { fileInfo } from "../store/fileInfo";

interface FileProps {
  filename?: string;
  fileType?: string;
  fileSrc?: string;
}

export const useFile = () => {
  const [treeFile, setTreeFile] = useRecoilState<FileProps>(fileInfo);

  useEffect(() => {}, [treeFile]);

  const resetFile = () => {
    setTreeFile({
      filename: undefined,
      fileType: undefined,
      fileSrc: undefined,
    });
  };

  const setFileSrc = (fileSrc: string) => {
    treeFile &&
      setTreeFile((prev) => {
        return { ...prev, fileSrc };
      });
  };
  const setFileType = (fileType: string) => {
    treeFile &&
      setTreeFile((prev) => {
        return { ...prev, fileType };
      });
  };
  const setFileName = (filename: string) => {
    treeFile &&
      setTreeFile((prev) => {
        return { ...prev, filename };
      });
  };
  return {
    treeFile,
    setFileSrc,
    setFileType,
    setFileName,
    setTreeFile,
    resetFile,
  };
};
