import React from "react";
import CardAbout from "../about/cardAbout";
import "animate.css";

export const metadata = {
  title: "About | KaPan .",
};

const About = () => {
  return (
    <div className="bg bg-zinc-100 dark:bg-zinc-900 py-10 ">
      <CardAbout />
    </div>
  );
};

export default About;
