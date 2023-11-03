"use client";
import BlogDetailsTop from "@/components/BlogDetails/BlogDetailsTop";
import RelatedBlogs from "@/components/BlogDetails/RelatedBlogs";
import CommonLayout from "@/components/CommonLayout";

const page = () => {
  return (
    <CommonLayout>
      <BlogDetailsTop />
      <RelatedBlogs />
    </CommonLayout>
  );
};

export default page;
