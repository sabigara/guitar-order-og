export type FileType = "png" | "jpeg";
export type Theme = "light" | "dark";

export interface ParsedRequest {
  fileType: FileType;
  settings?: string;
}
