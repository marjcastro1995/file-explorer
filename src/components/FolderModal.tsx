import React from "react";
import { Modal, Box, TextField, Button, Typography } from "@mui/material";
import { modalBox } from "../styles/Modal.Styles.ts"; 
import { FolderModalProps } from "../types/FileExplorer.interface.ts";

const FolderModalComponent: React.FC<FolderModalProps> = ({ open, onClose, newFolderName, setNewFolderName, handleCreateFolder }) => {

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalBox}>
        <Typography variant="h6">Create New Folder</Typography>
        <TextField
          label="Folder Name"
          fullWidth
          value={newFolderName}
          onChange={(e) => setNewFolderName(e.target.value)}
          style={{ marginTop: 10 }}
        />
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: 20 }}
          onClick={handleCreateFolder}
        >
          Create
        </Button>
      </Box>
    </Modal>
  );
};

export default FolderModalComponent;
