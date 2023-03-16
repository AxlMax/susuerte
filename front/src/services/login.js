import serviceProvider from './provider'

const serviceAdapter = new serviceProvider("login")

const Oauth = async(body) => serviceAdapter.Post("oauth", body)

export default Oauth;



