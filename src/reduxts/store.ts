// store.ts
import { configureStore } from '@reduxjs/toolkit';


//student authentication
 import studentloginReducer from '../reduxts/Slices/studentauthslice/loginslice'
 import studentsignupReducer from '../reduxts/Slices/studentauthslice/signupslice'
 import forgotpasswordReducer from '../reduxts/Slices/studentauthslice/forgotpasswordslice'
 import verifyforgotpasswordReducer from '../reduxts/Slices/studentauthslice/verify_forgotPassword'
 import resetpasswordReducer from '../reduxts/Slices/studentauthslice/resetpassword'

export const store = configureStore({
  reducer: {
    

//student authentication
     studentLoginData:studentloginReducer,
     studentSignupData:studentsignupReducer,
     forgotpasswordData:forgotpasswordReducer,
     Verify_ForgotpasswordData: verifyforgotpasswordReducer,
     resetpasswordData:resetpasswordReducer


  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


