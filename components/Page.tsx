import * as React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
import { NextSeo } from "next-seo";

const Page: React.FC<{ children: any }> = ({ children }) => {
  const path = window.location.pathname;
  // const name = path.split("/")[1];
  // upper case first letter
  const name = path.charAt(1).toUpperCase() + path.slice(2);
  const title = `BlueCIT | ${name}`;
  const url = `https://bluecit.io${path}`;

  return (
    <>
      <NextSeo
        title={title}
        canonical={url}
        openGraph={{
          url: url,
          title: url,
        }}
      />
      <Header />
      {children}
      <Footer />
    </>
  );
};
export default Page;
