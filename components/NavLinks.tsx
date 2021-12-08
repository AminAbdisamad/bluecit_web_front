import * as React from "react";
import styled from "styled-components";
import Link from "next/link";

export const NavStyles = styled.div`
  ul {
    display: flex;
    li {
      list-style: none;
      padding: 1.5rem;
      font-size: 1.7rem;
      font-weight: 500;
      color: ${({ theme }) => theme.text};
      /* border-top: 2px solid transparent; */
      a:hover {
        color: var(--secondaryColor);
      }
      /* :hover {
      
        border-top: 2px solid var(--secondaryColor);
      } */
    }
  }
`;

export const MobileStyles = styled.div`
  ul {
    z-index: 1;
    display: flex;
    flex-direction: column;
    border: none;
    li {
      list-style: none;
      padding-bottom: 1rem;
      font-size: 1.7rem;

      a {
        color: white;
      }
    }
  }
`;

const NavLinks = () => {
  return (
    <ul>
      <li>
        <Link href='/about'>About Us </Link>
      </li>
      <li>
        <Link href='#'>Products</Link>
      </li>
      <li>
        <Link href='/services'>Services</Link>
      </li>
      <li>
        <Link href='/contacts'>Contacts</Link>
      </li>
    </ul>
  );
};

export default NavLinks;
