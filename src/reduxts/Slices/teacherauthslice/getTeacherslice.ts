// apiSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {getTeacherById} from "@/services/api";
// import {RootState} from '../store'

interface ApiState {
  Teacherdata: any;
  loading: boolean;
  error: string | null;
}

const initialState: ApiState = {
  Teacherdata: null,
  loading: false,
  error: null,
};

export const getTeacherdata = createAsyncThunk('api/TeacherData', async (id:any) => {
  const response = await getTeacherById(id);
  //console.log(response,"all students data")
  return response;
});

const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTeacherdata.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTeacherdata.fulfilled, (state, action) => {
       // console.log("reducer from slice example", action);
        state.loading = false;
        state.Teacherdata = action.payload;
        state.error = null;
      })
      .addCase(getTeacherdata.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred.';
      });
  },
});

// export const selectApiData = (state:RootState) => state.api.data;
// export const selectApiLoading = (state:RootState) => state.api.loading;
// export const selectApiError = (state: RootState) => state.api.error;



export default apiSlice.reducer;