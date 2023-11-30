import Axios from "axios";

function interceptor(instance) {
  instance.interceptors.request.use((config) => config)
  return instance
}

export const api = interceptor(
  Axios.create({
    baseURL: "https://dummyjson.com/",
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
)