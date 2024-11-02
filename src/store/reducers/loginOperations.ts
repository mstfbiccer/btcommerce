import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import services from "../../services/loginServices";

interface LoginInput 
{
  username: string;
  password: string;
}
const login = createAsyncThunk(
  'loginOperations/login',
  
  async (input:LoginInput) => {
   const data = await services.login(input.username, input.password);
    return data;
  }
) as any;

export const loginOperationsSlice = createSlice({
  name: 'loginOperations',
  initialState: {
    login: {
      data: {},
      error: '',
      loading: false
    }
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.login.loading = true;
      state.login.error = '';
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.login.data = action.payload;
      state.login.loading = false;
      state.login.error = '';
    });
    builder.addCase(login.rejected, (state, action) => {
      state.login.error = action.error.message || '';
      state.login.loading = false;
    });
  }
});

export {login};
export default loginOperationsSlice.reducer;
