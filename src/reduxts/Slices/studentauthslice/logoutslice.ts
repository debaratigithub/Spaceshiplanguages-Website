import {  logout } from "../../../services/api";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
//import { useRouter } from 'next/navigation';
import { toast } from "react-toastify";

interface FormData {
    refreshToken:string
}

interface DataState {
  logoutData: FormData | null;
  loading: boolean;
  error: string | null;
}

export const logoutinfo = createAsyncThunk<FormData, FormData>(
  "Logoutuser",
  async (data) => {
  
    const responseData = await logout(data);
    if(responseData.status==true){
      toast.success(responseData.message);
       localStorage.setItem("Resetpasswordtoken", responseData.token)
      
    }
    else{
      
      toast.error(responseData.message);
    }
  
    console.log(responseData,"Data from post response")
    return responseData;
  }
);

const initialState: DataState = {
    logoutData: null,
  loading: false,
  error: null,
};

const logoutuserSlice = createSlice({
  name: "logout",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(logoutinfo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        logoutinfo.fulfilled,
        (state, action: PayloadAction<FormData>) => {
          console.log("reducer from forgot pass slice example", action);
          state.loading = false;
          state. logoutData = action.payload;
        }
      )
      .addCase(logoutinfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "An error occurred.";
      });
  },
});

export default logoutuserSlice.reducer;
