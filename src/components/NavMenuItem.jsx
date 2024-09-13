import styled from "styled-components";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import {
  FaPlus,
  FaCalendar,
  FaFolder,
  FaCheck,
  FaTrash,
  FaCog,
} from "react-icons/fa";

const StyledMenuItem = styled.li`
  width: 100%;
  margin: 15px auto;
  display: flex;
  align-items: center;
  color: ${({ hover }) => hover};

  @media (min-width: 768px) {
    margin: 24px 0;
  }
`;

const StyledLink = styled(NavLink)`
  width: 80%;

  @media (min-width: 768px) {
    /* width: 100%; */
  }
`;

function MenuItem({ to, isHovered, text, hoverIn, hoverOut }) {
  return (
    <StyledLink
      to={to}
      onMouseOver={() => {
        hoverIn(text);
      }}
      onMouseOut={() => {
        hoverOut();
      }}
    >
      <StyledMenuItem hover={isHovered === text ? "#68A619" : "#000000"}>
        {text === "Home" && <FaCalendar style={{ marginRight: "2rem" }} />}
        {text === "Add Task" && <FaPlus style={{ marginRight: "2rem" }}/>}
        {text === "Completed" && <FaCheck style={{ marginRight: "2rem" }}/>}
        {text === "Categories" && <FaFolder style={{ marginRight: "2rem" }}/>}
        {text === "Bin" && <FaTrash style={{ marginRight: "2rem" }}/>}
        {text === "Settings" && <FaCog style={{ marginRight: "2rem" }}/>}

        {text}
      </StyledMenuItem>
    </StyledLink>
  );
}

MenuItem.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  hoverIn: PropTypes.func.isRequired,
  hoverOut: PropTypes.func.isRequired,
  isHovered: PropTypes.string.isRequired,
};

StyledMenuItem.propTypes = {
  hover: PropTypes.string,
};
export default MenuItem;
