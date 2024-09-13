import styled from "styled-components";

const HeaderComponent = styled.header`
    display: block;
`
function AppHeader() {
    return ( 
        <HeaderComponent>
            <p>This is the header component</p>  
        </HeaderComponent>
     );
}

export default AppHeader;