import styled from "styled-components";

const StyledMenu = styled.ul`
  display: ${({ isActive }) => isActive};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  list-style-type: none;
  top: 1.5rem;
  width: 100%;
  margin: 0;


  @media (min-width:768px) {
    position: unset;
    margin-top: 2.5rem;
  }
`;

function Menu({ children, isActive }) {
  return (
    <StyledMenu isActive={isActive ? 'flex' : 'none'}>
      {children}
    </StyledMenu>
  );
}

export default Menu;
