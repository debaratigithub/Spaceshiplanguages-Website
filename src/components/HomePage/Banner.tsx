import CommonBanner from "../Ui/CommonBanner";

const Banner = () => {
  return (
    <CommonBanner
      titleTxt="Hello,"
      heading="Let's Learn Languages From Expert Instructors"
      description="It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that"
      isFilter={true}
    />
  );
};

export default Banner;
