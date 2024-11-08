import Image from "next/image";
import React from "react";

const BenefitCard = ({
  image,
  title = "Lorem",
  desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
}) => {
  return (
    <div className="bg-gradient-to-b from-[#1F1F1F] to-[#1F1F1F] p-[1px] rounded-[20px] w-full h-full flex flex-col hover:from-[#00AAFF] hover:to-[#060675] cursor-pointer overflow-hidden">
      <div className="w-full px-[59px] py-[52px] bg-black rounded-t-[20px]">
        <Image src={image} width={180} height={180} alt="item" className="object-cover !w-full" />
      </div>
      <div className="p-5 bg-black rounded-b-[20px] flex-1">
        <p className="mb-4 text-heading-lg">{title}</p>
        <p className="text-body-lg">{desc}</p>
      </div>
    </div>
  );
};

export default BenefitCard;
