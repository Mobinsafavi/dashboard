import { IDefaultException } from "../index";
import BackendErrorExtractor from "../BackendErrorExtractor";
import { BackendError } from "../../../config/types";
import { AxiosError } from "axios";

const defaultNotFound: IDefaultException = (error: AxiosError) => {
  const { message } = BackendErrorExtractor.handle(error as any);
  if (typeof window !== "undefined" && message) {
    window.openSnackbar(message, "error");
  }
};

export default defaultNotFound;
