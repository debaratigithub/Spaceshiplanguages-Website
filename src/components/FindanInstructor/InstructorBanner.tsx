"use client";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import CommonBanner from "../Ui/CommonBanner";

const InstructorBanner = () => {
  const theme = useTheme();
  const mediamatch = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <CommonBanner
      heading="Learn a language intuitively and with fun!"
      description="We help you to find the perfect tutor for you and your goals. Dies
     ist ein Typoblindtext. An ihm kann man sehen, ob alle Buchstaben da sind und wie sie aussehen. Manchmal benutzt man Worte wie Hamburgefonts."
      ctaButton={true}
      ctaButtonTxt="Start Now"
    />
  );
};

export default InstructorBanner;
