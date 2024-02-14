import BackendErrorExtractor from "../BackendErrorExtractor";
import { AxiosError } from "axios";

const ExceptionOf500 = (error: AxiosError) => {
  const { message } = BackendErrorExtractor.handle(error as any);
  if (typeof window !== "undefined" && message) {
    window.openSnackbar(message, "error");
  }
};

export default ExceptionOf500;
