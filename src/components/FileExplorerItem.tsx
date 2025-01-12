import React from "react";
import FolderIcon from "@mui/icons-material/Folder";
import FeedIcon from '@mui/icons-material/Feed';
import { FileExplorerItemProps } from "../types/FileExplorer.interface";
import { Button, List, ListItem, ListItemIcon, ListItemText,  } from "@mui/material";

const FileExplorerItemComponent: React.FC<FileExplorerItemProps> = ({ item, handleOnClick, handleDelete }) => {
  return (
    <List style={{ 
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      fontSize: '18px', }}>
      <ListItem>
        <ListItemIcon onClick={() => handleOnClick(item)}>
        {item.type === "folder" ? <FolderIcon/> : <FeedIcon/>}
        </ListItemIcon>
        <ListItemText
          onClick={() => handleOnClick(item)}
          primary={item.name}
        />
        <Button variant="outlined" color="error" onClick={() => handleDelete(item)} style={{ marginLeft: 10 }}>
          Delete
        </Button>
      </ListItem>
  </List>
  );
};

export default FileExplorerItemComponent;
