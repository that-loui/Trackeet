import styled from "styled-components";
import Logo from "../assets/Trackeet.svg";
import { NavLink } from "react-router-dom";
import Menu from "../components/NavMenu";
import MenuItem from "../components/NavMenuItem";
import { useState } from "react";

const StyledContainer = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 1.2rem;
  background-color: #ebf2e3;
  flex: 0.6;
`;
const LogoImg = styled.img`
  width: 100%;
`;

function SideBar() {
  const [isHovered, setIsHovered] = useState("");

  const HandleHoverIn = (item) => {
    setIsHovered(item);
  };
  const HandleHoverOut = () => {
    setIsHovered("");
  };
  return (
    <StyledContainer>
      <NavLink to={"/"} style={{ width: "70%" }}>
        <LogoImg src={Logo} />
      </NavLink>
      <Menu isActive={true}>
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
    </StyledContainer>
  );
}

export default SideBar;
