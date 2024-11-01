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
  }
});

export { getProductById, getProductDataByIdList };
export default productOperations.reducer;
