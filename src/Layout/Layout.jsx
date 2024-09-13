import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import AppHeader from "./AppHeader";
import SideBar from "./SideBar";
import MobileNav from "./MobileNav";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 1rem;
    margin: 2rem;
  }
`;

const MainBodyContainer = styled.main`
  flex: 3;
`;

function MainLayout() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      const screenSize = window.innerWidth;
      if (screenSize < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container>
      {isMobile ? (
        <>
          <MobileNav />
          <MainBodyContainer>
            <AppHeader />
            <Outlet />
            <h1>This is mobile</h1>
          </MainBodyContainer>
        </>
      ) : (
        <>
          <SideBar />
          <MainBodyContainer>
            <AppHeader />
            <Outlet />
            <h1>This is desktop</h1>
          </MainBodyContainer>
        </>
      )}
    </Container>
  );
}

export default MainLayout;
