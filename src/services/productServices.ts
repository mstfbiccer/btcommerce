import { axiosClient } from "./client";

const getProductById = async (id: number) => {
  const {data} = await axiosClient.get(`/products/${id}`);
  return data;
}

const getProductDataByIdList = async (idList: number[]) => {
  const allResponses = await Promise.all(idList.map(id => getProductById(id)));
  return allResponses;
}
export default {
  getProductById,
  getProductDataByIdList
};