import * as React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";
import Link from "next/link";
import Logo from "./BluecitLogo";
import { DarkTheme as ToggleThemeIcon } from "@styled-icons/fluentui-system-filled";
import { useToggle } from "../utils/globalState";

const HeaderStyle = styled.div`
  height: 90px;
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  padding: var(--paddingLayout);
  position: sticky;
  width: 100%;
  background-color: transparent;
  top: 0;
  overflow: hidden;
  &.active {
    background-color: ${({ theme }) => theme.background};
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
    border-bottom: none;
    z-index: 1;
    overflow: hidden;
    transition: ease-in all 430ms;
    h1 {
      color: var(--dark);
    }
    li {
      color: var(--dark);
    }
  }
  h1 {
    color: var(--greyDark);
  }
  @media (max-width: 768px) {
    justify-content: space-evenly;
  }
`;

export const ThemeLink = styled.a`
  animation: 1.5s ease 0s infinite beat;
  cursor: pointer;
  @keyframes beat {
    0%,
    50%,
    100% {
      transform: scale(1, 1);
    }
    30%,
    80% {
      transform: scale(0.92, 0.95);
    }
  }
`;

function Header() {
  const [headerColor, setHeaderColor] = React.useState(false);
  const { darkMode } = useToggle();

  // Check if scrolling
  const changeHeaderColor = () => {
    if (window.scrollY > 80) {
      setHeaderColor(true);
    } else {
      setHeaderColor(false);
    }
  };
  typeof window !== "undefined" &&
    window.addEventListener("scroll", changeHeaderColor);

  return (
    <HeaderStyle className={headerColor ? "active" : ""}>
      <Link href='/'>
        <a style={{ paddingLeft: "4rem", paddingTop: "1rem" }}>
          <Logo width='50%' fill={darkMode.value ? "white" : "#03256C"} />
        </a>
      </Link>
      <Navigation />
      <ThemeLink>
        <ToggleThemeIcon onClick={darkMode.toggle} size='40' />
      </ThemeLink>
    </HeaderStyle>
  );
}

export default Header;
