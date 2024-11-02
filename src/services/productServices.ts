import { axiosClient } from "./client";

const getProductById = async (id: number) => {
  const {data} = await axiosClient.get(`/products/${id}`);
  return data;
}

const getProductDataByIdList = async (idList: number[]) => {
  const allResponses = await Promise.all(idList.map(id => getProductById(id)));
  return allResponses;
}

const getCategories = async () => {
  const {data} = await axiosClient.get('products/categories');
  return data;
}

const getSpecificCategory = async (catName: string) => {
  const {data} = await axiosClient.get(`products/category/${catName}`);
  return data;
}

const getProductsData = async () => {
  const {data} = await axiosClient.get('products');
  return data;
}

export default {
  getProductById,
  getProductDataByIdList,
  getCategories,
  getSpecificCategory,
  getProductsData
};