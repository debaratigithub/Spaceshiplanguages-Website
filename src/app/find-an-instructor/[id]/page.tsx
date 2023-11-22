"use client";
import { Box, Grid } from "@mui/material";
import CommonLayout from "@/components/CommonLayout";
import { styles } from "@/app/styles";
import InstructorDetailsCompmain from "@/components/InstructorDetails/InstructorDetailsCompmain";
import { usePathname } from "next/navigation";

//Redux toolkit
import { getTeacherdata } from "@/reduxts/Slices/teacherauthslice/getTeacherslice";
import { useAppDispatch, useAppSelector } from "@/reduxts/hooks";
import { RootState } from "@/reduxts/store";
import { useEffect, useState } from "react";

import axios from "axios";

// interface InstructorDetailsProps {
//   // Define the type or interface for the props, including Teacherdata
//   Teacherdata:any
//   // teacherData?: any;
  
// }

 const InstructorDetails = () => {
 // const InstructorDetails: React.FC<InstructorDetailsProps> = () => {
  //taking id for redux calling
  const [teacherData, setTeacherData] = useState(null);
  const pathname = usePathname();
  console.log(pathname, "+++++hi");
  const pathSegments = pathname.split("/");

  const id = pathSegments[pathSegments.length - 1];

  //console.log("ID:", id);

  //redux calling for dynamic routing
  // const Teacherdata = useAppSelector(
  //   (state: RootState) => state?.teacherdata?.Teacherdata?.teacher
  // );
  // console.log(
  //   Teacherdata?.name,
  //   "+++++++++ calling from parent teacher component"
  // );

  // const dispatch = useAppDispatch();
  // useEffect(() => {
  //   dispatch(getTeacherdata(id));
  // }, [dispatch]);



  //test 2
  // Function to fetch a single teacher's data by ID
const getTeacherById1 = async (teacherId: any) => {
  try {
    // Construct the API endpoint with the teacher ID
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}api/teacher/get-teacher-by-id/${id}`;

    // Fetch data from the API endpoint
    const response = await axios.get(apiUrl);
    console.log(response?.data?.teacher?.name,"new+++++++++++")
    // const Teacherdata =response?.data?.teacher
    setTeacherData(response?.data?.teacher);

    // Return the data received from the API
    return response.data;
  } catch (error) {
    // Handle errors - log or throw as needed
    // console.error(`Error fetching teacher data for ID ${teacherId}:`, error);
    throw error;
  }
};

useEffect(() => {
  getTeacherById1(id)
}, [])


  return (
    <CommonLayout>
      <Box sx={insDetailsHome}>
        <Grid container sx={styles.container}>
          <InstructorDetailsCompmain  teacherData={teacherData}/>
        </Grid>
      </Box>
    </CommonLayout>
  );
};
const insDetailsHome = () => ({
  marginTop: "134px",
  paddingTop: "2rem",
});
export default InstructorDetails;
