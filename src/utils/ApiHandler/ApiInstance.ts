import { AxiosRequestConfig, Method } from "axios";
import { Instance } from "./AxiosInstance";
import Request from "./Request";
import { BackendError } from "../../config/types";
import BackendErrorExtractor from "../ErrorHandler/BackendErrorExtractor";
import ErrorHandler, { IErrorHandler } from "../ErrorHandler";

export interface IRequestCustomOptions {
  showSuccess?: string;
  errorOptions?: Partial<IErrorHandler>;
}
export interface IApiCallParams {
  url: string;
  method?: Method;
  params?: any;
  data?: any;
  requestOption?: AxiosRequestConfig;
  requestInstance?: Request;
}

export interface IRequestOptions {
  showSuccess?: string;
  errorOptions?: Partial<IErrorHandler>;
}

class APIHandler<T = any> {
  url = "";
  params: any;
  data: any;
  method?: Method = "GET";
  requestOptions?: AxiosRequestConfig;
  requestInstance: Request = Instance;
  response!: T;
  status!: number;
  errors: BackendError | null = null;
  backendError?: BackendErrorExtractor;
  isSuccess: boolean = true;

  constructor(
    url: string,
    method?: Method,
    params?: any,
    data?: any,
    requestOption?: AxiosRequestConfig
  ) {
    this.url = url;
    this.method = method;
    this.params = params;
    this.data = data;
    this.requestOptions = requestOption;
  }

  showSuccess(msg: IRequestOptions["showSuccess"]) {
    if (window && !this.errors && msg) {
      window.openSnackbar(msg, "success");
    }
    return this;
  }
  succeedRequestHandler(options: IRequestOptions) {
    if (options.showSuccess) {
      this.showSuccess(options.showSuccess);
    }
  }

  async request() {
    const { requestInstance: httpRequest } = this.requestInstance;
    try {
      const result = await httpRequest({
        url: this.url,
        params: this.params,
        method: this.method,
        data: this.data,
        ...this.requestOptions,
      });
      this.response = Boolean(result.data.result)
        ? result.data.result
        : result.data;
      this.status = 200;
    } catch (e) {
      this.errors = e as BackendError;

      const error = BackendErrorExtractor.handle(this.errors);
      this.backendError = error;
      if (error.status) {
        this.status = error.status;
      }
      this.isSuccess = false;
    }
    return this;
  }

  static call<U>(
    {
      params,
      requestOption,
      url,
      method,
      data,
      requestInstance,
    }: IApiCallParams,
    option?: IRequestOptions
  ): Promise<APIHandler<U>> {
    const api = new APIHandler(url, method, params, data, requestOption);
    if (requestInstance) api.requestInstance = requestInstance;
    return api.request().then(async (req) => {
      if (option) {
        req.succeedRequestHandler(option);
      }
      if (req.errors) {
        await ErrorHandler.handle(req.errors, option?.errorOptions);
      }
      return req;
    });
  }
}

export default APIHandler;
