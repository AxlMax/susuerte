import {imageProvide} from './provider'

const serviceAdapter = new imageProvide()

const getImageInfo = (form) => serviceAdapter.Post(form)

export default getImageInfo