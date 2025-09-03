import { create } from "zustand";

export type FileType = "image";
export type AITransformationType =
  | "removebg"
  | "bgremove"
  | "changebg"
  | "genfill"
  | "dropshadow"
  | "retouch"
  | "upscale"
  | "genvar"
  | "facecrop"
  | "smartcrop"
  | null;

export interface UploadedFile {
  url: string;
  fileId: string;
  name: string;
  type: FileType;
  thumbnailUrl?: string;
  size: number;
  format?: string;
  dimensions?: string;
}

interface FileAIStore {
  uploadedFile: UploadedFile | null;
  progress: number;
  isUploading: boolean;
  folderType: FileType;
  activeTransformation: AITransformationType;
  transformedImageUrl: string | null;
  isTransforming: boolean;
  error: string | null;
  setUploadedFile: (file: UploadedFile | null) => void;
  setProgress: (progress: number) => void;
  setIsUploading: (isUploading: boolean) => void;
  setFolderType: (folderType: FileType) => void;
  setActiveTransformation: (transformation: AITransformationType) => void;
  setTransformedImageUrl: (url: string | null) => void;
  setIsTransforming: (isTransforming: boolean) => void;
  setError: (error: string | null) => void;
  reset: () => void;
}

export const useFileAIStore = create<FileAIStore>((set) => ({
  uploadedFile: null,
  progress: 0,
  isUploading: false,
  folderType: "image",
  activeTransformation: null,
  transformedImageUrl: null,
  isTransforming: false,
  error: null,
  setUploadedFile: (file: UploadedFile | null) => set({ uploadedFile: file }),
  setProgress: (progress: number) => set({ progress }),
  setIsUploading: (isUploading: boolean) => set({ isUploading }),
  setFolderType: (folderType: FileType) => set({ folderType }),
  setActiveTransformation: (transformation: AITransformationType) =>
    set({ activeTransformation: transformation }),
  setTransformedImageUrl: (url: string | null) =>
    set({ transformedImageUrl: url }),
  setIsTransforming: (isTransforming: boolean) => set({ isTransforming }),
  setError: (error: string | null) => set({ error }),
  reset: () =>
    set({
      uploadedFile: null,
      progress: 0,
      isUploading: false,
      activeTransformation: null,
      transformedImageUrl: null,
      isTransforming: false,
      error: null,
    }),
}));