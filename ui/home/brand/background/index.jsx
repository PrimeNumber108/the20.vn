import React from "react";
import Vector1 from "./Vector1";
import Vector2 from "./Vector2";
import Vector3 from "./Vector3";
import Vector4 from "./Vector4";

const BrandBackground = () => {
  return (
    <div className="w-full h-full opacity-50 blur-[80px] relative">
      <div className="absolute top-[-116px] left-[-102px]">
        <Vector1 />
      </div>
      <div className="absolute top-[-84px] left-[1356px]">
        <Vector2 />
      </div>
      <div className="absolute bottom-[-69.52px] left-[359px]">
        <Vector3 />
      </div>
      <div className="absolute bottom-[-64.29px] left-[867.81px]">
        <Vector4 />
      </div>
    </div>
  );
};

export default BrandBackground;
