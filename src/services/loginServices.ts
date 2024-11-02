import { axiosClient } from "./client";

const login = async (username: string, password: string) => {
  const {data} = await axiosClient.post(`/auth/login`, {username, password});
  return data;
}

export default {
  login
};
