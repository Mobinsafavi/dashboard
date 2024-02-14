import { BackendError } from "../../config/types";
import { AxiosError } from "axios";

class BackendErrorExtractor {
  code?: number;
  message?: string;
  status?: number;
  name?: string;
  type?: string;

  static handle(error: BackendError) {
    const ErrorToReturn = new BackendErrorExtractor();
    ErrorToReturn.name = error?.response?.data.result.name;
    ErrorToReturn.code = error?.response?.data.result.code;
    ErrorToReturn.message = error?.response?.data.result.message;
    ErrorToReturn.type = error?.response?.data.result.type;
    ErrorToReturn.status = error?.response?.data.result.status;
    return ErrorToReturn;
  }
}

export default BackendErrorExtractor;
