import Breadcrumb from "@/components/breadcrumb";
import React from "react";
import ProductItem from "./ProductItem";
import { useTranslations } from "next-intl";

const Product = () => {
  const t = useTranslations("about.product");

  return (
    <div className="py-16 flex-center">
      <div className="page-layout grid-layout">
        <div className="space-y-10 grid-child-10 md:space-y-16">
          <Breadcrumb>
            <p className="text-heading-md">{t("breadcrumb")}</p>
          </Breadcrumb>
          <p className="text-heading-lg">{t("title")}</p>
          <div className="grid md:grid-cols-3 gap-[32px]">
            <div className="col-span-1 space-y-[32px]">
              <ProductItem image="/images/about/product-1.png" title={t("0.name")} desc={t("0.desc")} />
              <ProductItem image="/images/about/product-4.png" title={t("3.name")} desc={t("3.desc")} />
            </div>
            <div className="col-span-1 md:mt-[92px] space-y-[32px]">
              <ProductItem image="/images/about/product-2.png" title={t("1.name")} desc={t("1.desc")} />
              <ProductItem image="/images/about/product-5.png" title={t("4.name")} desc={t("4.desc")} />
            </div>
            <div className="col-span-1 md:mt-[234px] space-y-[32px]">
              <ProductItem image="/images/about/product-3.png" title={t("2.name")} desc={t("2.desc")} />
              <ProductItem image="/images/about/product-6.png" title={t("5.name")} desc={t("5.desc")} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
