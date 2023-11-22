import {
  fetchBlogList,
  fetchTeacherList,
  fetchTeacherSignup,
} from "@/services/api";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

interface DataState {
  blogListData: any | null;
  loading: boolean;
  error: string | null;
}

export const getBlogListData = createAsyncThunk(
  "blogListData/getBlogListData",
  async () => {
    const responseData = await fetchBlogList();
    console.log(responseData);
    if (responseData.status == true) {
      // toast.success(responseData.message);
      // localStorage.setItem("Status", responseData.status)
      console.log(responseData);
    } else {
      // toast.error(responseData.message);
    }

    // router.push("/dashboard");
    // console.log(responseData,"Data from post response")

    return responseData;
  }
);

const initialState: DataState = {
  blogListData: null,
  loading: false,
  error: null,
};

const blogListslice = createSlice({
  name: "blogListData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBlogListData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        getBlogListData.fulfilled,
        (state, action: PayloadAction<FormData>) => {
          //  console.log("reducer from admin login slice example", action);
          state.loading = false;
          state.blogListData = action.payload;
        }
      )
      .addCase(getBlogListData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "An error occurred.";
      });
  },
});

export default blogListslice.reducer;
