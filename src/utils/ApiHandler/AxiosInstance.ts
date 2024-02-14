import Request from "./Request";

export const Instance = Request.create();

Instance.requestInstance.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers["Content-Type"] = "application/json";
    config.headers.Authorization = `Bearer ${localStorage.access_token}`;
  }

  return config;
});

Instance.requestInstance.interceptors.response.use(
  (response) => response,
  (err) => {
    console.log(err);
  }
);
