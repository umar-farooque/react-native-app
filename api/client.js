import { create } from "apisauce";

const apiClient = create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

const get = apiClient.get;

apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    return response;
  }

  return response;
};

export default apiClient;
