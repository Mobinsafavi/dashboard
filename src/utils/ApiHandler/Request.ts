import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosRequestHeaders,
} from "axios";

const defaultHeaders = {
  "Content-Type": "application/json",
};
class Request {
  requestInstance: AxiosInstance = axios;
  baseUrl: string = "";
  requestConfig: AxiosRequestConfig = {
    headers: defaultHeaders,
  };

  static create(options?: { headers: AxiosRequestHeaders; baseURL: string }) {
    const request = new Request();

    request.requestInstance = axios.create({
      baseURL: options?.baseURL,
    });

    if (options) {
      request.setBaseUrl(options.baseURL);
      request.setRequestHeader(options.headers);
    }

    return request;
  }

  setBaseUrl(baseURL: string) {
    this.baseUrl = baseURL;
    this.requestConfig = {
      ...this.requestConfig,
      baseURL,
    };
  }

  setRequestHeader(requestHeaders: AxiosRequestHeaders) {
    this.requestConfig = {
      ...this.requestConfig,
      headers: { ...this.requestConfig.headers, ...requestHeaders },
    };
  }
}

export default Request;
