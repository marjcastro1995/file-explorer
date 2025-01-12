import React from "react";

export interface FileStructure {
    name: string;
    type: "folder" | "file";
    children?: FileStructure[];
    content?: string;
}  

export interface BreadcrumbProps {
  currentPath: Array<{ name: string }>;
  setCurrentPath: React.Dispatch<React.SetStateAction<any[]>>;
}

export interface FileExplorerItemProps {
  item: FileStructure;
  handleOnClick: (item: FileStructure) => void;
  handleDelete: (item: FileStructure) => void;
}

export interface FileModalProps {
    open: boolean;
    onClose: () => void;
    newFileName: string;
    newFileContent: string;
    setNewFileName: React.Dispatch<React.SetStateAction<string>>;
    setNewFileContent: React.Dispatch<React.SetStateAction<string>>;
    handleCreateFile: () => void;
}

export interface FolderModalProps {
    open: boolean;
    onClose: () => void;
    newFolderName: string;
    setNewFolderName: React.Dispatch<React.SetStateAction<string>>;
    handleCreateFolder: () => void;
}

export interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}