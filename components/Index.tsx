import React from "react";
import styled from "styled-components";
// import Header from "./Header";
import Showcase from "./Showcase";

const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
`;

function Index() {
  return (
    <div>
      <Showcase />
    </div>
  );
}

export default Index;
