import Breadcrumb from "@/components/breadcrumb";
import React from "react";
import ProductItem from "./ProductItem";
import { useTranslations } from "next-intl";

const Product = () => {
  const t = useTranslations("about.product");

  return (
    <div className="py-[62px] flex-center">
      <div className="page-layout gird-layout">
        <div className="col-span-10 col-start-2 space-y-[64px]">
          <Breadcrumb>
            <p>{t("breadcrumb")}</p>
          </Breadcrumb>
          <p>{t("title")}</p>
          <div className="grid grid-cols-3 gap-[32px]">
            <div className="col-span-1 space-y-[32px]">
              <ProductItem image="/images/about/product-1.png" title={1} />
              <ProductItem image="/images/about/product-4.png" title={2} />
            </div>
            <div className="col-span-1 mt-[92px] space-y-[32px]">
              <ProductItem image="/images/about/product-2.png" title={1} />
              <ProductItem image="/images/about/product-5.png" title={2} />
            </div>
            <div className="col-span-1 mt-[234px] space-y-[32px]">
              <ProductItem image="/images/about/product-3.png" title={1} />
              <ProductItem image="/images/about/product-6.png" title={2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
