
import {  fetchTeacherSignup } from '@/services/api';
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
  teacherregistrationData: FormData | null;
  loading: boolean;
  error: string | null;
}

export const signupTeacherData = createAsyncThunk<FormData, FormData>('student/signupData', async (data) => {
 //  const router = useRouter();
  // const response = await fetch('https://nodeserver.mydevfactory.com:6014/api/auth/register', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(data),
  // });
  // const responseData = await response.json();
  const responseData = await fetchTeacherSignup(data);
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
    teacherregistrationData: null,
  loading: false,
  error: null,
};

const teacherSignupslice = createSlice({
  name: 'studentsignup',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(signupTeacherData.pending, (state) => {
      state.loading = true;
      state.error = null;
    }).addCase(signupTeacherData.fulfilled, (state, action: PayloadAction<FormData>) => {
     
      //  console.log("reducer from admin login slice example", action);    
        state.loading = false;
            state.teacherregistrationData = action.payload;
           
          }).addCase(signupTeacherData.rejected,(state, action)=>{
            
            state.loading = false;
            state.error = action.error.message || 'An error occurred.';
          })

     },
});


export default teacherSignupslice.reducer;
