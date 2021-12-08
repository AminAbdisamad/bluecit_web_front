import type { AppProps } from "next/app";
import * as React from "react";
import Page from "../components/Page";
import { ToggleThemeStateProvider } from "../utils/globalState";
import withData from "../utils/withData";
import { GlobalStyles } from "styles/ThemeConfig";
import "antd/dist/antd.css";
// import "@/styles/antd.less";

const toggleIconStyle = {
  position: "absolute",
  top: 20,
  right: 20,
  zIndex: 100,
};
function MyApp({ Component, pageProps }: AppProps) {
  const [isMounted, setIsMounted] = React.useState(false);
  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <ToggleThemeStateProvider>
      <GlobalStyles />
      <Page>
        <Component {...pageProps} />
      </Page>
    </ToggleThemeStateProvider>
  );
}

// Make Apollo  & Nextjs work together
MyApp.getInitialProps = async function ({
  Component,
  ctx,
}: {
  Component: any;
  ctx: any;
}) {
  let pageProps: any = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps.query = ctx.query;
  return { pageProps };
};
//@ts-ignore
export default withData(MyApp);

// export default MyApp;
