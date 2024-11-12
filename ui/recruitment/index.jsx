import React from "react";
import Intro from "./intro";
import Benefit from "./benefit";
import Position from "./position";
import Process from "./process";

const Recruitment = () => {
  return (
    <div className="overflow-hidden">
      <Intro />
      <Benefit />
      <Position />
      <Process />
    </div>
  );
};

export default Recruitment;
