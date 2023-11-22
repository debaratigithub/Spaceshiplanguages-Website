"use client";
import { Grid } from "@mui/material";
import InstructorDetailsCard from "./InstructorDetailsCard";
import AboutInstructorTabs from "./AboutInstructorTabs";
import LessonType from "./LessonType";
import SlotAvailability from "./SlotAvailability";
import TeacherReviews from "./TeacherReviews";
import VideoPlayCard from "./VideoPlayCard";

interface InstructorDetailsCompmainProps {
  teacherData: any;
}

 //const InstructorDetailsCompmain = () => {
  const InstructorDetailsCompmain: React.FC<InstructorDetailsCompmainProps> = ({ teacherData }) => {
     console.log(teacherData,"from child1")
  return (
    <Grid container spacing={5}>
      <Grid item xs={8}>
        <InstructorDetailsCard teacherDatacard={teacherData}/>
        <AboutInstructorTabs  teacherDatatab={teacherData} />
        <LessonType />
        <SlotAvailability />
        <TeacherReviews />
      </Grid>
      <Grid item xs={4}>
        <VideoPlayCard />
      </Grid>
    </Grid>
  );
};

export default InstructorDetailsCompmain;
