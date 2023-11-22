import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

interface FormData {
  email: string;
  dasignation: string;
  name: string;
  message: string;
}

interface DataState {
  contactData: FormData | null;
  loading: boolean;
  error: string | null;
}

export const contactUsData = createAsyncThunk<FormData, FormData>(
  "student/contactUsData",
  async (data) => {
    //  const router = useRouter();
    const response = await fetch(
      "https://nodeserver.mydevfactory.com:6014/api/cms/app/add/user-contact-us",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const responseData = await response.json();
    if (responseData.status == true) {
      toast.success(responseData.message);
      // localStorage.setItem("Status", responseData.status)
    } else {
      toast.error(responseData.message);
    }

    // router.push("/dashboard");
    // console.log(responseData,"Data from post response")

    return responseData;
  }
);

const initialState: DataState = {
  contactData: null,
  loading: false,
  error: null,
};

const contactUSSlice = createSlice({
  name: "contactUs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(contactUsData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        contactUsData.fulfilled,
        (state, action: PayloadAction<FormData>) => {
          //  console.log("reducer from admin login slice example", action);
          state.loading = false;
          state.contactData = action.payload;
        }
      )
      .addCase(contactUsData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "An error occurred.";
      });
  },
});

export default contactUSSlice.reducer;
