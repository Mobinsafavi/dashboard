import { AxiosError } from "axios";
import ExceptionOf500 from "./defaultExceptions/ExceptionOf500";
import ExceptionOf404 from "./defaultExceptions/ExceptionOf404";
import ExceptionOfUnknownError from "./defaultExceptions/ExceptionOfUnknownError";

export type IDefaultException = (error: AxiosError) => void;

export type ICustomException = (error: AxiosError) => any;

interface ICustom422ExceptionHelpers {
  setFieldError: any;
  setError: any;
  showNotification?: boolean;
}

export type ICustom422Exception = (
  error: AxiosError,
  helpers: ICustom422ExceptionHelpers
) => any;

export type IErrorHandler = {
  [x in keyof ErrorHandler]: (error: AxiosError) => any;
};
class ErrorHandler implements IErrorHandler {
  500: ICustomException | IDefaultException = ExceptionOf500;
  404: ICustomException | IDefaultException = ExceptionOf404;
  unknown: ICustomException | IDefaultException = ExceptionOfUnknownError;

  static async handle(error: AxiosError, params?: Partial<IErrorHandler>) {
    const errHandler = new ErrorHandler();
    const customErrorHandler = { ...errHandler, ...params } as ErrorHandler;
    if (error && error.response?.status) {
      let responseStatus = error.response.status as keyof ErrorHandler;

      if (customErrorHandler) {
        if (customErrorHandler[responseStatus]) {
          await customErrorHandler[responseStatus](error);
        } else {
          await customErrorHandler.unknown(error);
        }
      }
    }
  }
}

export default ErrorHandler;
