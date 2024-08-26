import { Outlet } from "react-router-dom";
import styled from "styled-components";
import AppHeader from "./AppHeader";
import SideBar from "./SideBar";


const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
`

function MainLayout() {
  return (
      <Container>
        <SideBar />
        <AppHeader />
        <Outlet />
      </Container>
  );
}

export default MainLayout;
