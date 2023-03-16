import HomeHeader from "components/Headers/HomeHeader";
import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { Container } from "reactstrap";

function Ambulancias() {

    
    const [ticketValidate, setTicketValidate] = useState("")

    const ticket = useSelector((state => state.ticket.value));
    const imageContent = useSelector(state => state.ticket.content);
    const validate  =  useSelector(state => state.ticket.validate);

    useEffect(()=> {

        if(validate !== undefined){
            if(validate["_id"] !== undefined){
                setTicketValidate("Ticket ganador")
            }else{
                setTicketValidate("ticket perdedor")
            }
        }
        
    },[validate])

    

    return (<>
        <HomeHeader/>

        <Container className = "mt-5" fluid>

           <div className="d-flex justify-content-center">

            {
                imageContent !== undefined ?
                <div class ="w-80 p-3">
                    <img src = {imageContent} class = "img-fluid h-50"/>
                </div>:
                <></>
            }
            {   
                ticket !== undefined ? 
                    <div>
                        <h2 className="my-5"> Informacion del ticket </h2>
                        <pre className = "">
                            {ticket} 
                        </pre> 
                    </div> :
                    <></>
            }
            {
                validate !== undefined ? 
                <div>
                    <h2 className="text-center">{`ticket analizado ${ticketValidate}`}</h2> 
                    <pre className = "">
                        {JSON.stringify(validate, null,"  ")} 
                    </pre> 
                </div>
                :
                <></>
            }
     
           </div>

        </Container>
        
    </>);
}

export default Ambulancias;