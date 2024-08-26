import styled from "styled-components";

const Container = styled.div`
    display: block;
    grid-column:2/4 ;
    grid-row:2/4 ;
`

function Homepage() {
    return ( 
        <Container>
           <h1>This is the homepage</h1>
        </Container>
     );
}

export default Homepage;