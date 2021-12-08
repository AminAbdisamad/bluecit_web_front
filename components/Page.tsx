import * as React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

const Page: React.FC<{ children: any }> = ({ children }) => {
  return (
    <div>
      <Head>
        <title>BlueCIT | Cybersecurity & Software Development</title>
        <meta name='google' content='nositelinkssearchbox' key='sitelinks' />
        <meta name='google' content='notranslate' key='notranslate' />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
export default Page;
