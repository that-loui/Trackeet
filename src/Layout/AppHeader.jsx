import styled from "styled-components";

const HeaderComponent = styled.header`
    display: block;
    grid-column: 2/4;
    grid-row: 1/2;
`
function AppHeader() {
    return ( 
        <HeaderComponent>
            <p>This is the header component</p>  
        </HeaderComponent>
     );
}

export default AppHeader;