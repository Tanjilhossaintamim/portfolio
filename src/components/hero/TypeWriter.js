"use client";
import { Bio } from "@/utils/data";
import { Typewriter } from "react-simple-typewriter";

const SimpleTypeWriter = () => {
  return (
    <Typewriter
      words={Bio.roles}
      loop={true}
      cursor
      cursorStyle="|"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1000}
    />
  );
};

export default SimpleTypeWriter;
