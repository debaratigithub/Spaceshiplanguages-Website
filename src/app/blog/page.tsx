import BlogBanner from "@/components/Blog/BlogBanner";
import BlogListing from "@/components/Blog/BlogListing";
import CommonLayout from "@/components/CommonLayout";

const Blog = () => {
  return (
    <>
      <CommonLayout>
        <BlogBanner />
        <BlogListing />
      </CommonLayout>
    </>
  );
};

export default Blog;
