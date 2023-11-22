import { fetchAboutUs } from "@/services/api";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

interface ApiState {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: ApiState = {
  data: null,
  loading: false,
  error: null,
};

export const AboutUsdata = createAsyncThunk("aboutUs/AboutUsData", async () => {
  const response = await fetchAboutUs();
  console.log(response, "about-us");
  return response;
});

const AboutUSSlice = createSlice({
  name: "aboutUs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(AboutUsdata.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        AboutUsdata.fulfilled,
        (state, action: PayloadAction<FormData>) => {
          //  console.log("reducer from admin login slice example", action);
          state.loading = false;
          state.data = action.payload;
        }
      )
      .addCase(AboutUsdata.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "An error occurred.";
      });
  },
});

export default AboutUSSlice.reducer;
