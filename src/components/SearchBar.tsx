import React from "react";
import { TextField } from "@mui/material";
import { SearchBarProps } from "../types/FileExplorer.interface";

const SearchBarComponent: React.FC<SearchBarProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <TextField
      label="Search"
      variant="outlined"
      size="small"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      style={{ width: '25%' }}
    />
  );
};

export default SearchBarComponent;
