import React from "react";
import Link from "next/link";
import styled from "styled-components";

const SVGStyles = styled.svg`
  width: 100%;
  background: cover;
  margin: 0 auto;
  z-index: -1;
`;

const ShowcaseBackground = styled.div`
  width: 100%;
  height: 80vh;
  margin-top: -10rem;
  background: ${(prop) => prop.theme.background};
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1430%26quot%3b)' fill='none'%3e%3cpath d='M666.23 235.62L681.21 235.62L681.21 259.46L666.23 259.46z' stroke='rgba(237%2c 29%2c 127%2c 0.3)'%3e%3c/path%3e%3cpath d='M1288.63 285.15L1338.64 285.15L1338.64 335.16L1288.63 335.16z' fill='rgba(3%2c 37%2c 108%2c 0.3)'%3e%3c/path%3e%3cpath d='M202.13 235.59L209.77 235.59L209.77 251.3L202.13 251.3z' fill='rgba(3%2c 37%2c 108%2c 0.3)'%3e%3c/path%3e%3cpath d='M652.69 458.59a44.45 44.45 0 1 0 47.1-75.4z' fill='rgba(237%2c 29%2c 127%2c 0.3)'%3e%3c/path%3e%3cpath d='M164.11 318.56 a41.07 41.07 0 1 0 82.14 0 a41.07 41.07 0 1 0 -82.14 0z' stroke='rgba(237%2c 29%2c 127%2c 0.3)'%3e%3c/path%3e%3cpath d='M487.63 395.36L500.63 395.36L500.63 408.36L487.63 408.36z' stroke='rgba(3%2c 37%2c 108%2c 0.3)'%3e%3c/path%3e%3cpath d='M259.2 416.27 a10.73 10.73 0 1 0 21.46 0 a10.73 10.73 0 1 0 -21.46 0z' fill='rgba(3%2c 37%2c 108%2c 0.3)'%3e%3c/path%3e%3cpath d='M206.82 553.04L246.96 553.04L246.96 593.18L206.82 593.18z' fill='rgba(237%2c 29%2c 127%2c 0.3)'%3e%3c/path%3e%3cpath d='M147.22 175.43a26.85 26.85 0 1 0 50.9 17.1z' stroke='rgba(237%2c 29%2c 127%2c 0.3)'%3e%3c/path%3e%3cpath d='M110.46 167.47L112.93 167.47L112.93 169.94L110.46 169.94z' stroke='rgba(237%2c 29%2c 127%2c 0.3)'%3e%3c/path%3e%3cpath d='M55.59 385.01 a23.04 23.04 0 1 0 46.08 0 a23.04 23.04 0 1 0 -46.08 0z' stroke='rgba(237%2c 29%2c 127%2c 0.3)'%3e%3c/path%3e%3cpath d='M1315.01 182.62 a11.98 11.98 0 1 0 23.96 0 a11.98 11.98 0 1 0 -23.96 0z' fill='rgba(237%2c 29%2c 127%2c 0.3)'%3e%3c/path%3e%3cpath d='M897.44 360.7L904.92 360.7L904.92 368.18L897.44 368.18z' stroke='rgba(3%2c 37%2c 108%2c 0.3)'%3e%3c/path%3e%3cpath d='M526.87 527.33 a51.6 51.6 0 1 0 103.2 0 a51.6 51.6 0 1 0 -103.2 0z' stroke='rgba(3%2c 37%2c 108%2c 0.3)'%3e%3c/path%3e%3cpath d='M908.07 199.35L963.09 199.35L963.09 250.03L908.07 250.03z' fill='rgba(3%2c 37%2c 108%2c 0.3)'%3e%3c/path%3e%3cpath d='M923.91 312.16 a25.91 25.91 0 1 0 51.82 0 a25.91 25.91 0 1 0 -51.82 0z' fill='rgba(3%2c 37%2c 108%2c 0.3)'%3e%3c/path%3e%3cpath d='M1154.42 581.35a55.63 55.63 0 1 0 68.22-87.9z' fill='rgba(3%2c 37%2c 108%2c 0.3)'%3e%3c/path%3e%3cpath d='M30.01 536.86 a38.51 38.51 0 1 0 77.02 0 a38.51 38.51 0 1 0 -77.02 0z' stroke='rgba(237%2c 29%2c 127%2c 0.3)'%3e%3c/path%3e%3cpath d='M1103.77 382.24L1116.11 382.24L1116.11 394.58L1103.77 394.58z' fill='rgba(237%2c 29%2c 127%2c 0.3)'%3e%3c/path%3e%3cpath d='M1341.54 527.18L1374.87 527.18L1374.87 560.51L1341.54 560.51z' stroke='rgba(3%2c 37%2c 108%2c 0.3)'%3e%3c/path%3e%3cpath d='M853.96 154.44L870.12 154.44L870.12 170.6L853.96 170.6z' fill='rgba(3%2c 37%2c 108%2c 0.3)'%3e%3c/path%3e%3cpath d='M1382.3 153.15a45.96 45.96 0 1 0-58.73-70.71z' stroke='rgba(237%2c 29%2c 127%2c 0.3)'%3e%3c/path%3e%3cpath d='M44.4 503.66L87.91 503.66L87.91 504.75L44.4 504.75z' stroke='rgba(237%2c 29%2c 127%2c 0.3)'%3e%3c/path%3e%3cpath d='M1023.47 535.02 a26.67 26.67 0 1 0 53.34 0 a26.67 26.67 0 1 0 -53.34 0z' stroke='rgba(237%2c 29%2c 127%2c 0.3)'%3e%3c/path%3e%3cpath d='M442.92 68.83L451.11 68.83L451.11 77.02L442.92 77.02z' fill='rgba(3%2c 37%2c 108%2c 0.3)'%3e%3c/path%3e%3cpath d='M1313.37 544.35L1331.04 544.35L1331.04 561.66L1313.37 561.66z' stroke='rgba(3%2c 37%2c 108%2c 0.3)'%3e%3c/path%3e%3cpath d='M638.25 119.19L661.18 119.19L661.18 142.12L638.25 142.12z' fill='rgba(237%2c 29%2c 127%2c 0.3)'%3e%3c/path%3e%3cpath d='M1392.96 295.43 a5.89 5.89 0 1 0 11.78 0 a5.89 5.89 0 1 0 -11.78 0z' fill='rgba(3%2c 37%2c 108%2c 0.3)'%3e%3c/path%3e%3cpath d='M643.46 390.94L685.18 390.94L685.18 432.66L643.46 432.66z' stroke='rgba(237%2c 29%2c 127%2c 0.3)'%3e%3c/path%3e%3cpath d='M1237.58 198.85L1253.28 198.85L1253.28 210.91L1237.58 210.91z' fill='rgba(3%2c 37%2c 108%2c 0.3)'%3e%3c/path%3e%3cpath d='M254.93 488.32L267.78 488.32L267.78 542.86L254.93 542.86z' stroke='rgba(3%2c 37%2c 108%2c 0.3)'%3e%3c/path%3e%3cpath d='M374.51 422.79L383.82 422.79L383.82 476.39L374.51 476.39z' stroke='rgba(237%2c 29%2c 127%2c 0.3)'%3e%3c/path%3e%3cpath d='M633.57 228.14a31.78 31.78 0 1 0-63.21-6.61z' fill='rgba(237%2c 29%2c 127%2c 0.3)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1430'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
  z-index: -5;
  position: relative;
  /* border-radius: 0% 10% 100% 0% / 10% 0% 16% 0%; */
  height: 600px;
`;

const ShowcaseArea = styled.div`
  position: absolute;
  padding: var(--paddingLayout);
  top: 20%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ShowcaseText = styled.div`
  /* background: rgba(0, 0, 0, 0.9); */
  color: ${({ theme }) => theme.text};
  text-align: center;
  width: 80%;

  h1 {
    font-size: 4.5rem;
    line-height: 60px;
    margin-bottom: 2rem;
    color: ${({ theme }) => theme.showcaseText};
  }
  p {
    font-size: 2rem;
    font-weight: 300;
    /* color: var(--grey_2); */
  }
  button {
    margin: 0 auto;
    display: block;
  }
  @media (max-width: 1050px) {
    width: 100% !important;
    h1 {
      font-size: 3.5rem;
    }
    p {
      font-size: 1.5rem;
    }
    button {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 850px) {
    width: 100% !important;
    h1 {
      font-size: 3rem;
    }
    p {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 610px) {
    width: 100% !important;
    h1 {
      font-size: 3rem;
    }
    p {
      display: none;
    }
  }
`;
function Showcase() {
  return (
    <>
      <ShowcaseBackground />
      <ShowcaseArea>
        <ShowcaseText>
          <h1>Your Cybersecurity and Digital Transformation Partner</h1>
          <p>
            We are an innovative internet security & Software development
            consulting fırm that is dedicated to provide high quality services,
            strategic solutions, technical consulting, and data protection to
            businesses and organizations
          </p>
          <span className='btn'>
            <Link href='/contacts'>Contact Us</Link>
          </span>
        </ShowcaseText>
      </ShowcaseArea>
      {/* <div className='box'>
        <div className='wave'></div>
        <div className='wave -one'></div>
        <div className='wave -two'></div>
        <div className='wave -three'></div>
      </div> */}
      {/* <WaverySVG fill='transparent' /> */}
    </>
  );
}

export default Showcase;
