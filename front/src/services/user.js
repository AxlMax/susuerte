import serviceProvider from './provider'

const serviceAdapter = new serviceProvider("user")

const Cuser = async(body) => serviceAdapter.Post(`Cuser`, body)

const RambulanciasByuser = async(id, token) =>  serviceAdapter.Get(
    `RambulanciasByuser?idc=${id}`,{
        headers: {
          'Authorization': `Bearer ${token}`
        }
})

const linkAmbulancia = async(idc, idl, token) => serviceAdapter.Patch(
  `linkAmbulancia?idc=${idc}&idl=${idl}`,
  {},{
      headers: {
        'Authorization': `Bearer ${token}`
      }
  })

export default Cuser;
export {RambulanciasByuser, linkAmbulancia};