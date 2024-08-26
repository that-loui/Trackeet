import styled from "styled-components";

const SideBarComponent = styled.aside`
  grid-column: 1/2;
  grid-row: 1/4;
`;

function SideBar() {
  return <SideBarComponent>Side bar</SideBarComponent>;
}

export default SideBar;
