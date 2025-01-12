import React, { useState, useEffect } from "react";
import { Container, Button, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme.ts";
import { initialStructure } from "./data.ts";
import BreadcrumbsComponent from "./components/Breadcrumbs.tsx";
import SearchBarComponent from "./components/SearchBar.tsx";
import FileExplorerItemComponent from "./components/FileExplorerItem.tsx";
import FileModalComponent from "./components/FileModal.tsx";
import FolderModalComponent from "./components/FolderModal.tsx";
import AddIcon from '@mui/icons-material/Add';
import { FileStructure } from "./types/FileExplorer.interface.ts";
import { deleteItem } from "./utils.ts";

const App = () => {
  const [structure, setStructure] = useState(() => {
    const savedData = localStorage.getItem("fileExplorerData");
    return savedData ? JSON.parse(savedData) : initialStructure;
  });
  const [currentPath, setCurrentPath] = useState<FileStructure[]>([structure]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isFolderModalOpen, setFolderModalOpen] = useState(false);
  const [isFileModalOpen, setFileModalOpen] = useState(false);
  const [newFolderName, setNewFolderName] = useState("");
  const [newFileName, setNewFileName] = useState("");
  const [newFileContent, setNewFileContent] = useState("");

  useEffect(() => {
    localStorage.setItem("fileExplorerData", JSON.stringify(structure));
  }, [structure]);

  const getCurrentFolder = () => currentPath[currentPath.length - 1];

  const handleCreateFolder = () => {
    const folder = { name: newFolderName, type: "folder", children: [] };
    const currentFolder = getCurrentFolder();
    currentFolder.children.push(folder);
    setStructure({ ...structure });
    setNewFolderName("");
    setFolderModalOpen(false);
  };

  const handleCreateFile = () => {
    const file = { name: newFileName, type: "file", content: newFileContent };
    const currentFolder = getCurrentFolder();
    currentFolder.children.push(file);
    setStructure({ ...structure });
    setNewFileName("");
    setNewFileContent("");
    setFileModalOpen(false);
  };

  const handleOnClick = (item) => {
    if (item.type === "folder") {
      setCurrentPath([...currentPath, item]);
    } else if (item.type === "file") {
      alert(`File Content: ${item.content}`);
    }
  };

  const handleSearch = () => {
    const filterItems = (items) =>
      items.filter(
        (item) =>
          item.name.includes(searchQuery) ||
          (item.type === "file" && item.content.includes(searchQuery)) ||
          (item.type === "folder" && filterItems(item.children).length > 0)
      );
    return filterItems(getCurrentFolder().children);
  };

  const handleDelete = (item: FileStructure) => {
    const currentFolder = getCurrentFolder();
    const updatedChildren = deleteItem(currentFolder.children, item);
    currentFolder.children = updatedChildren;
    setStructure({ ...structure });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Typography variant="h4" gutterBottom sx={{ marginTop: 2, textAlign: 'center' }}>
          File Explorer
        </Typography>
        <SearchBarComponent searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <span style={{float: 'right'}}>
          <Button onClick={() => setFolderModalOpen(true)} variant="contained" color="primary">
            <AddIcon/> New Folder
          </Button>
          <Button onClick={() => setFileModalOpen(true)} variant="contained" color="primary" style={{ marginLeft: 10 }}>
            <AddIcon/> New File
          </Button>
        </span>

        <BreadcrumbsComponent currentPath={currentPath} setCurrentPath={setCurrentPath} />
        <div style={{ margin: "20px 0" }}>
          {handleSearch().map((item, index) => (
            <FileExplorerItemComponent key={index} item={item} handleOnClick={handleOnClick} handleDelete={handleDelete} />
          ))}
        </div>
        <Typography variant="body2" align="right">
          Total: {getCurrentFolder().children.length} items
        </Typography>
      </Container>

      {/* Modals */}
      <FolderModalComponent open={isFolderModalOpen} onClose={() => setFolderModalOpen(false)} newFolderName={newFolderName} setNewFolderName={setNewFolderName} handleCreateFolder={handleCreateFolder} />
      <FileModalComponent open={isFileModalOpen} onClose={() => setFileModalOpen(false)} newFileName={newFileName} newFileContent={newFileContent} setNewFileName={setNewFileName} setNewFileContent={setNewFileContent} handleCreateFile={handleCreateFile} />
    </ThemeProvider>
  );
};

export default App;
