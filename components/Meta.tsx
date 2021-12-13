import { NextSeo } from "next-seo";
import * as React from "react";

const Meta: React.FC<{ name: string; path: string }> = ({ name, path }) => {
  // const path = window.location.pathname;
  // const name = path.split("/")[1];
  // upper case first letter
  // const name = path.charAt(1).toUpperCase() + path.slice(2);
  const title = `BlueCIT - ${name}`;
  const url = `https://bluecit.io${path}`;

  return (
    <NextSeo
      title={title}
      canonical={url}
      openGraph={{
        url: url,
        title: url,
      }}
    />
  );
};

export default Meta;
