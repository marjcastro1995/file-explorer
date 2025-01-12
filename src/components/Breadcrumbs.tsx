import React from "react";
import { Breadcrumbs, Link } from "@mui/material";
import { BreadcrumbProps } from "../types/FileExplorer.interface";

const BreadcrumbsComponent: React.FC<BreadcrumbProps> = ({ currentPath, setCurrentPath }) => {
  return (
    <Breadcrumbs sx={{ marginTop: '50px' }}>
      {currentPath.map((folder, index) => (
        <Link
          key={index}
          color="inherit"
          onClick={() => setCurrentPath(currentPath.slice(0, index + 1))}
          style={{ cursor: "pointer"}}
        >
          {folder.name}
        </Link>
      ))}
    </Breadcrumbs>
  );
};

export default BreadcrumbsComponent;
