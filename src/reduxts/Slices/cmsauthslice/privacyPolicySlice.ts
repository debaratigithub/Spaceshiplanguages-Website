import { fetchAboutUs, fetchPrivacyPolicy } from "@/services/api";
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

export const PrivacyPolicydata = createAsyncThunk(
  "privacyPolicy/PrivacyPolicydata",
  async () => {
    const response = await fetchPrivacyPolicy();
    // console.log(response, "privacy-policy");
    return response;
  }
);

const AboutUSSlice = createSlice({
  name: "privacyPolicy",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(PrivacyPolicydata.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        PrivacyPolicydata.fulfilled,
        (state, action: PayloadAction<FormData>) => {
          //  console.log("reducer from admin login slice example", action);
          state.loading = false;
          state.data = action.payload;
        }
      )
      .addCase(PrivacyPolicydata.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "An error occurred.";
      });
  },
});

export default AboutUSSlice.reducer;
