import * as React from "react";
import styled from "styled-components";

export const Heading = styled.div`
  padding: var(--paddingLayout);
  background: linear-gradient(40deg, rgb(237, 29, 127), rgba(3, 37, 108));
  background-size: cover;
  h1 {
    color: var(--light_1);
    font-size: 4rem;
  }
  @media (max-width: 610px) {
    h1 {
      font-size: 2rem;
    }
  }
`;

export const HeadingText = styled.p`
  font-size: 2rem;
  color: var(--light_1);
  padding-bottom: 2rem;
  text-align: center;
  @media (max-width: 610px) {
    p {
      font-size: 1.4rem;
    }
  }
`;

const PageHeading: React.FC<{ title: string; text: string; image?: any }> = ({
  title,
  text,
  image,
}) => {
  return (
    <>
      <Heading>
        <h1>{title}</h1>
        <HeadingText>{text}</HeadingText>
      </Heading>
    </>
  );
};
export default PageHeading;
