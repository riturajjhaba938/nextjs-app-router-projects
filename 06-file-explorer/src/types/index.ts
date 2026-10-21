export interface FileEntry {
  name: string;
  type: "file" | "folder";
  size: string;
  modified: string;
  path: string[];
  content?: string;
  extension?: string;
}

export interface DriveStats {
  usedGB: number;
  totalGB: number;
  fileCount: number;
  folderCount: number;
}
