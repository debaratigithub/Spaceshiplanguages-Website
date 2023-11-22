// store.ts
import { configureStore } from "@reduxjs/toolkit";

//student authentication
import studentloginReducer from "../reduxts/Slices/studentauthslice/loginslice";
import studentsignupReducer from "../reduxts/Slices/studentauthslice/signupslice";
import forgotpasswordReducer from "../reduxts/Slices/studentauthslice/forgotpasswordslice";
import verifyforgotpasswordReducer from "../reduxts/Slices/studentauthslice/verify_forgotPassword";
import resetpasswordReducer from "../reduxts/Slices/studentauthslice/resetpassword";
import logoutReducer from "../reduxts/Slices/studentauthslice/logoutslice";

//Teacher authentication
import teachersignupReducer from "../reduxts/Slices/teacherauthslice/teachersignupslice";
import ListReducer from "./Slices/teacherauthslice/teacherListSlice";
import get_teacherReducer from "../reduxts/Slices/teacherauthslice/getTeacherslice";
import blogListReducer from "./Slices/Blog/blogListSlice";
import changePassReducer from "./Slices/studentauthslice/changePasswordSlice";

//Common
import contactUsReducer from "./Slices/cmsauthslice/contactUsSlice";
import aboutUsReducer from "./Slices/cmsauthslice/aboutUsSlice";
import privacyPolicyReducer from "./Slices/cmsauthslice/privacyPolicySlice";
import termsNConReducer from "./Slices/cmsauthslice/termsNConditionSlice";

export const store = configureStore({
  reducer: {
    //student authentication
    studentLoginData: studentloginReducer,
    studentSignupData: studentsignupReducer,
    forgotpasswordData: forgotpasswordReducer,
    Verify_ForgotpasswordData: verifyforgotpasswordReducer,
    resetpasswordData: resetpasswordReducer,
    blogListData: blogListReducer,
    changePassData: changePassReducer,
    logoutData: logoutReducer,

    //Teacher authentication
    teacherSignupData: teachersignupReducer,
    teacherdata: get_teacherReducer,

    //Teacher Secion
    teacherListData: ListReducer,

    //Common
    cmsContactUsData: contactUsReducer,
    cmsAboutUsData: aboutUsReducer,
    cmsPrivacyPolicyData: privacyPolicyReducer,
    cmsTermsConData: termsNConReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
