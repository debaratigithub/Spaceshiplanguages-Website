"use client";
import CommonLayout from "@/components/CommonLayout";
import FindFeaturedInstructor from "@/components/HomePage/FindFeaturedInstructor";
import FindRightInstructor from "@/components/HomePage/FindRightInstructor";
import AboutLanguage from "@/components/HomePage/AboutLanguage";
import Testimonial from "@/components/HomePage/Testimonial";
import LatestBlogs from "@/components/HomePage/LatestBlogs";
import Banner from "@/components/HomePage/Banner";

const Page = () => {
  return (
    <CommonLayout>
      <Banner />
      <FindFeaturedInstructor />
      <FindRightInstructor />
      <AboutLanguage />
      <Testimonial />
      <LatestBlogs />
    </CommonLayout>
  );
};

export default Page;
