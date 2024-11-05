import React from "react";
import Vector1 from "./Vector1";
import Vector2 from "./Vector2";
import Vector3 from "./Vector3";
import Vector4 from "./Vector4";

const TeamBackground = () => {
  return (
    <div className="relative w-full h-full opacity-50 blur-[80px]">
      <div className="absolute top-[267px] left-[-116px]">
        <Vector1 />
      </div>
      <div className="absolute top-[285px] left-[1356px]">
        <Vector2 />
      </div>
      <div className="absolute top-[-37px] left-[359px]">
        <Vector3 />
      </div>
      <div className="absolute bottom-[-72px] left-[769px]">
        <Vector4 />
      </div>
    </div>
  );
};

export default TeamBackground;
