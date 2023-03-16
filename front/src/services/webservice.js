import {susuerteProvider} from './provider'

const serviceAdapter = new susuerteProvider()

const getToken = () => serviceAdapter.getToken()
const validate = (token, id) => serviceAdapter.validate(token,id)

export default getToken
export {validate}