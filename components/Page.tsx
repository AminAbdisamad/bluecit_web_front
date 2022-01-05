import * as React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
import { NextSeo } from "next-seo";
import Meta from "./Meta";

const Page: React.FC<{ children: any }> = ({ children }) => {
  return (
    <>
     
      <Header />
      {children}
      <Footer />
    </>
  );
};
export default Page;
