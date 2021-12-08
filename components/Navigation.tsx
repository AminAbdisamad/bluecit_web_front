import * as React from "react";
import { useMediaQuery } from "react-responsive";
import { slide as Menu } from "react-burger-menu";
import { SCREENS } from "./Responsive";
// import { Close as CloseIcon } from "@styled-icons/evil/";
// import { Menu as OpenIcon } from "@styled-icons/feather/";
// import styled from "styled-components";
// import { Modal } from "antd";
import { mobileNavStyles } from "styles/MobileNavStyles";
import NavLinks, { NavStyles, MobileStyles } from "./NavLinks";

const Navigation = () => {
  const [isClicked, setIsClicked] = React.useState(false);
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const isMobile = useMediaQuery({ maxWidth: SCREENS.md });
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  if (isMobile) {
    return (
      <>
        <Menu styles={mobileNavStyles} right isOpen={false}>
          <MobileStyles>
            <NavLinks />
          </MobileStyles>
        </Menu>
        {/* <span onClick={handleClick}>
          {isClicked ? <CloseIcon size='50' /> : <OpenIcon size='50' />}
        </span>
        <MobileStyles>{isClicked && <NavLinks />}</MobileStyles> */}
      </>
    );
  }
  return (
    <NavStyles>
      <NavLinks />
    </NavStyles>
  );
};

export default Navigation;

{
  /* <Menu styles={mobileNavStyles} right>
<NavLinks />
</Menu> */
}

{
  /* <button onClick={showModal}>Open</button>
        <Modal
          title='Basic Modal'
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal> */
}
