import { fetchTeacherList, fetchTeacherSignup } from "@/services/api";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";



interface DataState {
  teacherListData: any | null;
  loading: boolean;
  error: string | null;
}

export const getTeacherListData = createAsyncThunk(
  "teacherListData/getTeacherListData",
  async () => {
    const responseData = await fetchTeacherList();
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
  teacherListData: null,
  loading: false,
  error: null,
};

const teacherListslice = createSlice({
  name: "teacherListData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTeacherListData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        getTeacherListData.fulfilled,
        (state, action) => {
          //  console.log("reducer from admin login slice example", action);
          state.loading = false;
          state.teacherListData = action.payload;
        }
      )
      .addCase(getTeacherListData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "An error occurred.";
      });
  },
});

// export const { getTeacherListsData } = teacherListslice.actions;

// export const ListReducer = teacherListslice.reducer;


export default teacherListslice.reducer;
