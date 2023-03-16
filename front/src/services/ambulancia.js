import serviceProvider from './provider'

const serviceAdapter = new serviceProvider("ambulancia")

const Cambulancia = async(body,header) => serviceAdapter.Post(
    `Cambulancia`,
    body, { 
    headers :  {
      'Authorization': `Bearer ${header}`
    }
  }
);

const RambulanciabyId = async(id, header) => serviceAdapter.Get(
    `RambulanciabyId?id=${id}`,{ 
      headers :  {
        'Authorization': header
      }
    }
);

const RgpsByambulancia = async(id, token) => serviceAdapter.Get(
  `RgpsByambulancia?idc=${id}`,{
    headers: {
      'Authorization': `Bearer ${token}`
    }
  } 
);

const UambulanciabyId = async(body, id, header) => serviceAdapter.Patch(
  `UambulanciabyId?id=${id}`, 
  body, { 
    headers :  {
      'Authorization': header
    }
  }
);

const Dambulancia     = async(id, header) => serviceAdapter.Delete(
  `Dambulancia?id=${id}`, { 
    headers :  {
      'Authorization': `Bearer ${header}`
    }
  }
);

export default Cambulancia;
export {RambulanciabyId, UambulanciabyId, Dambulancia, RgpsByambulancia};