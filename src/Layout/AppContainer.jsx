import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
`;

function AppContainer({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

export default AppContainer;
