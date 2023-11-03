import CommonLayout from "@/components/CommonLayout";
import FilterBox from "@/components/FindanInstructor/Filter/FilterBox";
import InstructorBanner from "@/components/FindanInstructor/InstructorBanner";
import InstructorListing from "@/components/FindanInstructor/InstructorListing";

const Findinstructor = () => {
  return (
    <>
      <CommonLayout>
        <InstructorBanner />
        <FilterBox />
        <InstructorListing />
      </CommonLayout>
    </>
  );
};

export default Findinstructor;
