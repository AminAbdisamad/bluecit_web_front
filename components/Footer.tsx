import Link from "next/link";
import * as React from "react";
import { FooterStyles } from "styles/FooterStyles";
import {
  TwitterWithCircle,
  FacebookWithCircle,
  GithubWithCircle,
  InstagramWithCircle,
} from "@styled-icons/entypo-social/";
import { EmailOutline } from "@styled-icons/evaicons-outline/";
import { somaliMessage, globalMessage } from "../utils/getDay";
import { useToggle } from "../utils/globalState";
import Logo from "./BluecitLogo";
import styled from "styled-components";

export interface CountryTypes {
  city: string;
  country: string;
  hostname: string;
  ip: string;
  loc: string;
  org: string;
  postal: string;
  region: string;
  timezone: string;
}

const ContactStyle = styled.p`
  font-size: 2rem;
  font-weight: 400;
  color: ${({ theme }) => theme.text};
  padding-left: 1rem;
  a {
    padding-left: 1rem;
  }
`;
const footerYear = new Date();
export default function Footer() {
  const [countMessage, setCountMessage] = React.useState(0);
  const [country, setCountry] = React.useState<string | null>(null);
  const messages = [globalMessage, somaliMessage];
  const fetchData = async () => {
    const res = await fetch(
      `https://ipinfo.io?token=${process.env.NEXT_PUBLIC_IPINFO_TOKEN}`
    );
    const countryData = await res.json();
    if (countryData) {
      setCountry(countryData.country);
    }
    return countryData;
  };
  React.useEffect(() => {
    fetchData();
  }, []);
  const { darkMode } = useToggle();

  return (
    <FooterStyles>
      <div className='footer'>
        <div>
          <a>
            <Logo width='52%' fill={darkMode.value ? "white" : "#03256C"} />
          </a>

          <ContactStyle>
            <EmailOutline size='35' />
            <a type='email'>contact@bluecit.io</a>
          </ContactStyle>
        </div>
        <div className='footerMenu'>
          <ul>
            <h4>About</h4>
            <li>
              <Link href='about'>BlueCIT</Link>
            </li>
            <li>
              <a>Careers</a>
            </li>
          </ul>
        </div>
        <div className='footerMenu'>
          <ul>
            <h4>Products</h4>
            <li>
              <a>RAADI App</a>
            </li>
            <li>
              <Link href='/services'>Services</Link>
            </li>
          </ul>
        </div>
        <div className='footerMenu'>
          <ul>
            <h4>Insights</h4>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <Link href='/contacts'>Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='social'>
        <ul>
          <li>
            <a href='https://github.com/bluecit'>
              <GithubWithCircle size='50' />
            </a>
          </li>
          <li>
            <a href='https://twitter.com/BlueCIT_'>
              <TwitterWithCircle size='50' />
            </a>
          </li>
          <li>
            <a href='https://www.facebook.com/Bluecit.io'>
              <FacebookWithCircle size='50' />
            </a>
          </li>
          <li>
            <a href='https://www.instagram.com/bluecit_io'>
              <InstagramWithCircle size='50' />
            </a>
          </li>
        </ul>
      </div>
      <div className='message'>
        {country == "SO" ? <p>{somaliMessage}</p> : <p>{globalMessage} </p>}
      </div>
      <div className='copyright'>
        <p>
          © 2018 - {footerYear.getFullYear()} <span>BlueCIT</span>. All Rights
          Reserved.
        </p>
      </div>
    </FooterStyles>
  );
}
