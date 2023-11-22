import { fetchChangepass } from "@/services/api";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
//import { useRouter } from 'next/navigation';
import { toast } from "react-toastify";

interface FormData {
  password: string;
  newPassword: string;
  confirmPassword: string;
}

interface DataState {
  changepassData: FormData | null;
  loading: boolean;
  error: string | null;
}

export const changePasswordData = createAsyncThunk<FormData, FormData>(
  "student/ChangePassword",
  async (data) => {
    const responseData = await fetchChangepass(data);

    if (responseData.status == true) {
      toast.success(responseData.message);
      //localStorage.setItem("AdminEmail", responseData.email)
    } else {
      toast.error(responseData.message);
    }

    //router.push("/dashboard");
    console.log(responseData, "Data from forget password post response");

    return responseData;
  }
);

const initialState: DataState = {
  changepassData: null,
  loading: false,
  error: null,
};

const changepasswordSlice = createSlice({
  name: "adminchangepassword",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(changePasswordData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        changePasswordData.fulfilled,
        (state, action: PayloadAction<FormData>) => {
          //console.log("reducer from forgot pass slice example", action);
          state.loading = false;
          state.changepassData = action.payload;
        }
      )
      .addCase(changePasswordData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "An error occurred.";
      });
  },
});

export default changepasswordSlice.reducer;
