import { IDefaultException } from "../index";
import BackendErrorExtractor from "../BackendErrorExtractor";
import { AxiosError } from "axios";

const unknownErrorHandler: IDefaultException = (error: AxiosError) => {
  const { message } = BackendErrorExtractor.handle(error as any);
  if (typeof window !== "undefined" && message) {
    window.openSnackbar(message, "error");
  }
};

export default unknownErrorHandler;
