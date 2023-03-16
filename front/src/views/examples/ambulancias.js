import HomeHeader from "components/Headers/HomeHeader";
import Map from "components/map";
import { Container } from "reactstrap";

function Ambulancias() {
    return (<>
        <HomeHeader/>
        
        
        <Container className = "mt-5" fluid>
            <Map/>
        </Container>
            
       
        
    </>);
}

export default Ambulancias;