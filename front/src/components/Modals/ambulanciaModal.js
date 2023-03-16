import {Modal, ModalHeader, ModalBody, ModalFooter, Button, Form } from "reactstrap";

function AmbulanciaModal(props) {

    const {handlerFunction, modalStatus, style, handleSubmit, onSubmit} = props;
    
    var titleColor = "";
    var color = "";

    switch(style.buttonMessage){
        case "Crear":
            titleColor = "text-success";
            color = "success";
            break;
        
        case "Eliminar":
            titleColor = "text-danger";
            color = 'warning'
            break;
        
        case "Editar":
            titleColor = "text-info";
            color = 'success'
            break;
    }

    return (<>
    <Modal isOpen = {modalStatus} toggle = {handlerFunction} centered={true}>
        <Form role = "form" onSubmit={handleSubmit(onSubmit)}>
            <ModalHeader toggle={handlerFunction} tag="h3" className="text-success"> 
                <span className={titleColor}> {style.title} </span>
            </ModalHeader>
                    <ModalBody>
                        {typeof(style.content) === "string" ? style.content : style.content()}
                    </ModalBody>
                <ModalFooter>
            <Button color="danger" onClick = {handlerFunction}>
                cerrar
            </Button>
            <Button color = {color} onClick = {handlerFunction} type = "submit">
                {style.buttonMessage}
            </Button>
            </ModalFooter>
        </Form>
    </Modal>

    </>);
}

export default AmbulanciaModal;