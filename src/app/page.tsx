"use client";
import Boxs from "@/components/Boxs";
import Homepage from "../app/home/page";

const Home = () => {
  const hanhelClick = () => {
    console.log("Clicked!");
  };
  return (
    <Boxs>
      <Homepage />
    </Boxs>
  );
};

export default Home;
