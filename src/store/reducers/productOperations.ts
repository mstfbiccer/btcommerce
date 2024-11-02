import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import services from "../../services/productServices";

const getProductById = createAsyncThunk(
  'basketOperations/getProductById',
  async (id: number) => {
    const data = await services.getProductById(id);
    return data;
  }
) as any;

const getProductDataByIdList = createAsyncThunk(
  'basketOperations/getProductDataByIdList',
  async (idList: number[]) => {
    const data = await services.getProductDataByIdList(idList);
    return data;
  }
) as any;

const getCategories = createAsyncThunk(
  'basketOperations/getCategories',
  async () => {
    const data = await services.getCategories();
    return data;
  }
) as any;

const getSpecificCategory = createAsyncThunk(
  'basketOperations/getSpecificCategory',
  async (catName: string) => {
    const data = await services.getSpecificCategory(catName);
    return data;
  }
) as any;

const getProductsData = createAsyncThunk(
  'basketOperations/getProductsData',
  async () => {
    const data = await services.getProductsData();
    return data;
  }
) as any;


export const productOperations = createSlice({
  name: 'productOperations',
  initialState: {
    'product': {
      data: {},
      error: '',
      loading: false
    },
    'productDetails': {
      data: [],
      error: '',
      loading: false
    },
    'categories': {
      data: [],
      error: '',
      loading: false
    },
    'activeCategoryProducts': {
      data: [],
      error: '',
      loading: false
    },
    'products': {
      data: [],
      error: '',
      loading: false
    }
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductById.fulfilled, (state, action) => {
      state.product.data = action.payload;
      state.product.loading = false;
      state.product.error = '';
    })
    builder.addCase(getProductById.rejected, (state, action) => {
      state.product.error = action.error.message;
      state.product.loading = false;
    })
    builder.addCase(getProductById.pending, (state, action) => {
      state.product.loading = true;
    })

    builder.addCase(getProductDataByIdList.fulfilled, (state, action) => {
      state.productDetails.data = action.payload;
      state.productDetails.loading = false;
      state.productDetails.error = '';
    })

    builder.addCase(getProductDataByIdList.rejected, (state, action) => {
      state.productDetails.error = action.error.message;
      state.productDetails.loading = false;
    })

    builder.addCase(getProductDataByIdList.pending, (state, action) => {
      state.productDetails.loading = true;
    })

    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.categories.data = action.payload;
      state.categories.loading = false;
      state.categories.error = '';
    })

    builder.addCase(getCategories.rejected, (state, action) => {
      state.categories.error = action.error.message;
      state.categories.loading = false;
    })

    builder.addCase(getCategories.pending, (state, action) => {
      state.categories.loading = true;
    })

    builder.addCase(getSpecificCategory.fulfilled, (state, action) => {
      state.activeCategoryProducts.data = action.payload;
      state.activeCategoryProducts.loading = false;
      state.activeCategoryProducts.error = '';
    })

    builder.addCase(getSpecificCategory.rejected, (state, action) => {
      state.activeCategoryProducts.error = action.error.message;
      state.activeCategoryProducts.loading = false;
    })

    builder.addCase(getSpecificCategory.pending, (state, action) => {
      state.activeCategoryProducts.loading = true;
    })

    builder.addCase(getProductsData.fulfilled, (state, action) => {
      state.products.data = action.payload;
      state.products.loading = false;
      state.products.error = '';
    })

    builder.addCase(getProductsData.rejected, (state, action) => {
      state.products.error = action.error.message;
      state.products.loading = false;
    })

    builder.addCase(getProductsData.pending, (state, action) => {
      state.products.loading = true;
    })
  }
});

export { getProductById, getProductDataByIdList, getCategories, getSpecificCategory, getProductsData };
export default productOperations.reducer;
