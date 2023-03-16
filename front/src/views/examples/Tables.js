/*!

=========================================================
* Argon Dashboard React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// reactstrap components
import {
  Card,
  CardHeader,
  Table,
  Container,
  Row,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import { useSelector } from "react-redux";

const Tables = () => {

  const History  =  useSelector(state => state.ticket.validateHistory);
  
  console.log(History)
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

  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Historial Tickets</h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">id</th>
                    <th scope="col">id transacción</th>
                    <th scope="col">fecha sorteo</th>
                    <th scope="col">valor premio</th>  
                  </tr>
                </thead>

                <tbody>
                  {History.map(ticket => {

                    return <>
                      <tr>
                        <td>{ticket["_id"]}</td>
                        <td>{ticket["TRANSACCION_ID"]}</td>
                        <td>{ ticket["FECHA_SORTEO"]? getingDate(ticket["FECHA_SORTEO"]):''} </td>
                        <td>${ ticket["VALOR_PREMIO"]?separator(ticket["VALOR_PREMIO"]):''} </td>
                      </tr>
                    </>
                  })}
                </tbody>
              </Table>
            </Card>
          </div>
        </Row>
        {/* Dark table */}
      </Container>
    </>
  );
};

export default Tables;
