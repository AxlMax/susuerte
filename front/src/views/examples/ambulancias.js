import HomeHeader from "components/Headers/HomeHeader";
import { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { Container } from "reactstrap";
import '../../styles/header.css'
function Ambulancias() {

    
    const [ticketValidate, setTicketValidate] = useState("")

    const ticket = useSelector((state => state.ticket.value));
    const imageContent = useSelector(state => state.ticket.content);
    const validate  =  useSelector(state => state.ticket.validate);

    useEffect(()=> {

        if(validate !== undefined){
            if(validate["_id"] !== undefined){
                setTicketValidate("Ticket Ganador")
            }else{
                setTicketValidate("Ticket Perdedor")
            }
        }
        
    },[validate])

    function separator(numb) {
        var str = numb.toString().split(".");
        str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return str.join(".");
    }
    function getingDate(fecha) {
        const fechas = new Date(Date.parse(fecha));
        const fechaLegible = fechas.toLocaleDateString() + ' ' + fechas.toLocaleTimeString();
        return fechaLegible
    }
    

    return (<>
        <HomeHeader/>
        <Container className = "mt-5" fluid>
            
           <div className="content-body">
           
            {
                imageContent !== undefined ?
                <div class ="content-header">
                    <b id="title-name" >Ya Puedes Procesar la imagen</b>
                    <img src = {imageContent} className = "body-img"/>
                </div>:
                <></>
            }
            {   
                ticket !== undefined ? 
                    <div>
                        <h2 className="my-5"> Ticket Procesado Correctamente</h2>
                        <div className="content-body">
                            <b id="validated">Ya Puedes validarlo</b>
                            <pre>
                                {ticket}
                            </pre>
                        </div>
                    </div> :
                    <></>
            }
            {
                validate !== undefined ? 
                <div className="body-info">
                    <h2 className="text-center">Ticket analizado: <b>{ticketValidate}</b> </h2> 
                    <div className="content-table">
                        <div className="table-row">
                            <b>Fecha Sorteo: </b>
                            <p>{ validate.FECHA_SORTEO ? getingDate(validate.FECHA_SORTEO): ''}</p>
                        </div>
                        <div className="table-row">
                            <b>Valor Premio: </b>
                            <p>${validate.VALOR_PREMIO?separator(validate.VALOR_PREMIO): ''}</p>
                        </div>
                        <div className="table-row">
                            <b>Id de la Transacción: </b>
                            <p>{validate.TRANSACCION_ID}</p>
                        </div>
                    </div>
                </div>
                :
                <></>
            }
     
           </div>

        </Container>
        
    </>);
}

export default Ambulancias;