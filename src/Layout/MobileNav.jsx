import { Link, } from "react-router-dom";
import { useState, } from "react";
import styled from "styled-components";
import Logo from "../assets/Trackeet.svg";
import { FaTimes, FaBars } from "react-icons/fa";

import Menu from "../components/NavMenu";
import MenuItem from "../components/NavMenuItem";

const NavContainer = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1.2rem;
  background-color: #ebf2e3;
`;
const LogoImg = styled.img``;

const MobileNavHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const HamburgerMenu = styled.button`
  background-color: #ebf2e3;
  border-radius: 5px;
  border: 1.5px solid grey;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function MobileNav() {
  const [menuActive, setMenuActive] = useState(false);
  const [isHovered, setIsHovered] = useState("");

  const HandleHamburgerClick = () => {
    setMenuActive(!menuActive);
  };

  const HandleHoverIn = (item) => {
    setIsHovered(item);
  };
  const HandleHoverOut = () => {
    setIsHovered("");
  };
  return (
    <NavContainer>
      <MobileNavHeader>
        <Link to={"/"}>
          <LogoImg src={Logo} />
        </Link>
        <HamburgerMenu onClick={() => HandleHamburgerClick()}>
          {menuActive ? <FaTimes /> : <FaBars />}
        </HamburgerMenu>
      </MobileNavHeader>

      <Menu isActive={menuActive}>
        <MenuItem
          to={"/"}
          isHovered={isHovered}
          hoverIn={HandleHoverIn}
          hoverOut={HandleHoverOut}
          text={"Home"}
        />
        <MenuItem
          to={"/"}
          isHovered={isHovered}
          hoverIn={HandleHoverIn}
          hoverOut={HandleHoverOut}
          text={"Add Task"}
        />
        <MenuItem
          to={"/"}
          isHovered={isHovered}
          hoverIn={HandleHoverIn}
          hoverOut={HandleHoverOut}
          text={"Completed"}
        />
        <MenuItem
          to={"/"}
          isHovered={isHovered}
          hoverIn={HandleHoverIn}
          hoverOut={HandleHoverOut}
          text={"Categories"}
        />
        <MenuItem
          to={"/"}
          isHovered={isHovered}
          hoverIn={HandleHoverIn}
          hoverOut={HandleHoverOut}
          text={"Bin"}
        />
        <MenuItem
          to={"/"}
          isHovered={isHovered}
          hoverIn={HandleHoverIn}
          hoverOut={HandleHoverOut}
          text={"Settings"}
        />
      </Menu>
    </NavContainer>
  );
}

export default MobileNav;
