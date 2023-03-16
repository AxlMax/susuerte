
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";

import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { OauthSlice } from "storage/features/login/loginSlice";

import loginServices from '../../services/login';


import Vars from "vars";

const Login = () => {

  const ipServer = Vars.LOCAL === true ? 'localhost' : Vars.DEPLOYIP;

  const dispatch = useDispatch();
  const { register, handleSubmit} = useForm();

  const values = ["email", "passwd"];
  const registers = [];
 
  values.forEach((v) => {
    const {ref, ...others} =  register(v)
    registers.push({
      ref,
      others
    });
  });

  const onSubmit = async(data) => {

    const Token = await (await loginServices(data)).data;
    
    if(Token === "no puede ingresar" || Token === "No existe el usuario"){
      console.log("error")
    }else{

      const TokenWithoutBearer = Token.slice(7)

      dispatch(OauthSlice(TokenWithoutBearer))
      localStorage.setItem('Oauth', TokenWithoutBearer)      

      if(Vars.DEPLOY === true){
        window.location.href = `http://${ipServer}:3000/home`
      }else{
        window.location.href = `http://localhost:3000/home`
      }

    }
  };

  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardHeader className="bg-transparent pb-5">
          </CardHeader>
          <CardBody className="px-lg-5 py-lg-5">
            <Form role="form" onSubmit={handleSubmit(onSubmit)}>
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input 

                    placeholder="Correo electronico"
                    type="email"
                    autoComplete="new-email"

                  innerRef={registers[0].ref} 
                  {...registers[0].others}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input 

                  placeholder="Contraseña"
                  type="password"
                  autoComplete="new-password"

                  innerRef={registers[1].ref} 
                  {...registers[1].others}
                  />
                </InputGroup>
              </FormGroup>
              <div className="custom-control custom-control-alternative custom-checkbox">
                <input
                  className="custom-control-input"
                  id=" customCheckLogin"
                  type="checkbox"
                />
                <label
                  className="custom-control-label"
                  htmlFor=" customCheckLogin"
                >
                  <span className="text-muted">Recuerdame la contraseña</span>
                </label>
              </div>
              <div className="text-center">
                <Button className="my-4" color="primary" type="submit">
                    iniciar sesión
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
        <Row className="mt-3">
          <Col xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small>olvidate la contraseña?</small>
            </a>
          </Col>
          <Col className="text-right" xs="6">
            <a
              className="text-light"
              href={`http://${ipServer}:3000/auth/register`}
              onClick={(e) =>  window.location.href = `http://${ipServer}:3000/auth/register`}
            >
              <small>crear una cuenta</small>
            </a>
          </Col>
        </Row>
      </Col>
     
    </>
  );
};

export default Login;
