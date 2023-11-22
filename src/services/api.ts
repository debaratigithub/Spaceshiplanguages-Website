//api.ts
import axios from "axios";

// const API_BASE_URL = 'https://jsonplaceholder.typicode.com/users'; // Your API base URL

// export const fetchSomeData = async () => {
//   try {
//     const response = await axios.get(`${API_BASE_URL}`);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

//Student signup api

export const fetchSignup = async (data: any) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}api/auth/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    return response.json();
  } catch (error) {
    throw error;
  }
};

//Teacher signup api

export const fetchTeacherSignup = async (data: any) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}api/auth/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    return response.json();
  } catch (error) {
    throw error;
  }
};

//Student login api

export const fetchlogin = async (data: any) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}api/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    return response.json();
  } catch (error) {
    throw error;
  }
};

//forget password api
export const fetchForgetpass = async (data: any) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}api/auth/forgot-password`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    return response.json();
  } catch (error) {
    throw error;
  }
};

//Verify forget password api

export const fetchVerifyForgetpass = async (data: any) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}api/auth/verify-forgot-password`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    return response.json();
  } catch (error) {
    throw error;
  }
};

//reset password api

export const fetchResetpass = async (data: any) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}api/auth/reset-password`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    return response.json();
  } catch (error) {
    throw error;
  }
};

//change password api
export const fetchChangepass = async (data: any) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}api/auth/change-password`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    return response.json();
  } catch (error: any) {
    throw error;
  }
};

//get teacher list
export const fetchTeacherList = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}api/teacher/get-all-teachers`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.json();
  } catch (error) {
    throw error;
  }
};

//blog list
export const fetchBlogList = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}api/cms/get/all-blogs-list`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.json();
  } catch (error) {
    throw error;
  }
};

//about-us
export const fetchAboutUs = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}api/cms/app/about-us`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.json();
  } catch (error) {
    throw error;
  }
};

//Privacy-policy
export const fetchPrivacyPolicy = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}api/cms/app/privacy-policy`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.json();
  } catch (error) {
    throw error;
  }
};

//terms&Condition
export const fetchTermsNCon = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}api/cms/app/terms`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.json();
  } catch (error) {
    throw error;
  }
};
//logout api

export const logout = async (data: any) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}api/auth/logout`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    return response.json();
  } catch (error) {
    throw error;
  }
};

//Single teacher

// Function to fetch a single teacher's data by ID
export const getTeacherById = async (teacherId: any) => {
  try {
    // Construct the API endpoint with the teacher ID
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}api/teacher/get-teacher-by-id/${teacherId}`;

    // Fetch data from the API endpoint
    const response = await axios.get(apiUrl);

    // Return the data received from the API
    return response.data;
  } catch (error) {
    // Handle errors - log or throw as needed
    // console.error(`Error fetching teacher data for ID ${teacherId}:`, error);
    throw error;
  }
};
