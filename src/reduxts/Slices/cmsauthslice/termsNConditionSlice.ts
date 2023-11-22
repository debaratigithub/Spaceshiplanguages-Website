import { fetchTermsNCon } from "@/services/api";
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

export const TermsConditiondata = createAsyncThunk(
  "termsCondition/TermsConditiondata",
  async () => {
    const response = await fetchTermsNCon();
    // console.log(response, "terms-condition");
    return response;
  }
);

const TermsConditionSlice = createSlice({
  name: "termsCondition",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(TermsConditiondata.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        TermsConditiondata.fulfilled,
        (state, action: PayloadAction<FormData>) => {
          //  console.log("reducer from admin login slice example", action);
          state.loading = false;
          state.data = action.payload;
        }
      )
      .addCase(TermsConditiondata.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "An error occurred.";
      });
  },
});

export default TermsConditionSlice.reducer;
