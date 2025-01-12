import { FileStructure } from "./types/FileExplorer.interface.ts";

export const deleteItem = (items: FileStructure[], itemToDelete: FileStructure) => {
  return items.filter(item => item.name !== itemToDelete.name);
};
