
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { useRouter } from 'next/navigation';
import { toast } from "react-toastify";


interface FormData {
  email: string;
  password: string;
  name:string;
  role: string;
}

interface DataState {
  loginData: FormData | null;
  loading: boolean;
  error: string | null;
}

export const signupData = createAsyncThunk<FormData, FormData>('student/signupData', async (data) => {
 //  const router = useRouter();
  const response = await fetch('https://nodeserver.mydevfactory.com:6014/api/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const responseData = await response.json();
  if(responseData.status==true){
    toast.success(responseData.message);
    // localStorage.setItem("Status", responseData.status)
    
  }
  else{
    
    toast.error(responseData.message);
  }
  
 // router.push("/dashboard");
 // console.log(responseData,"Data from post response")
  
  return responseData;
});

const initialState: DataState = {
  loginData: null,
  loading: false,
  error: null,
};

const signupSlice = createSlice({
  name: 'studentsignup',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(signupData.pending, (state) => {
      state.loading = true;
      state.error = null;
    }).addCase(signupData.fulfilled, (state, action: PayloadAction<FormData>) => {
     
      //  console.log("reducer from admin login slice example", action);    
        state.loading = false;
            state.loginData = action.payload;
           
          }).addCase(signupData.rejected,(state, action)=>{
            
            state.loading = false;
            state.error = action.error.message || 'An error occurred.';
          })

     },
});


export default signupSlice.reducer;
