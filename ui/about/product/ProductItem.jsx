import Image from "next/image";
import React from "react";

const ProductItem = ({
  image,
  title = "Lorem",
  desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
}) => {
  return (
    <div className="bg-gradient-to-b from-[#00AAFF] to-[#060675] p-[1px] rounded-[20px] w-full">
      <Image
        src={image}
        width={310}
        height={298}
        alt="item"
        className="rounded-t-[20px] object-cover !w-full aspect-[310/298]"
      />
      <div className="p-5 bg-black rounded-b-[20px]">
        <p className="mb-4 text-heading-lg">{title}</p>
        <p className="text-body-sm">{desc}</p>
      </div>
    </div>
  );
};

export default ProductItem;
