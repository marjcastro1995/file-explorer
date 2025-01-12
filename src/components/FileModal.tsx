import React from "react";
import { Modal, Box, TextField, Button, Typography } from "@mui/material";
import { modalBox } from "../styles/Modal.Styles.ts"; 
import { FileModalProps } from "../types/FileExplorer.interface.ts";

const FileModalComponent: React.FC<FileModalProps> = ({ open, onClose, newFileName, newFileContent, setNewFileName, setNewFileContent, handleCreateFile }) => {

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalBox}>
        <Typography variant="h6">Create New File</Typography>
        <TextField
          label="File Name"
          fullWidth
          value={newFileName}
          onChange={(e) => setNewFileName(e.target.value)}
          style={{ marginTop: 10 }}
        />
        <TextField
          label="File Content"
          fullWidth
          multiline
          rows={4}
          value={newFileContent}
          onChange={(e) => setNewFileContent(e.target.value)}
          style={{ marginTop: 10 }}
        />
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: 20 }}
          onClick={handleCreateFile}
        >
          Create
        </Button>
      </Box>
    </Modal>
  );
};

export default FileModalComponent;
