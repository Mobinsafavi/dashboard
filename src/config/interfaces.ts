import { SnackbarVariant } from "./types";

declare global {
  interface Window {
    openSnackbar: (msg: string, type?: SnackbarVariant) => void;
  }
}
export interface IBackendResponse {
  ok: boolean;
  result: {
    name: string;
    code: number;
    message: string;
    status: number;
    type: string;
  };
}
