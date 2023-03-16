import axios from 'axios'
import vars from '../vars'

class serviceProvider{
    constructor(servicePath){
        this.uri =  vars.LOCAL === true 
            ? `http://localhost:${vars.BACKPORT}/api/${servicePath}` 
            : `http://${vars.REMOTEIP}:${vars.BACKPORT}/api/${servicePath}`;
    }


    Post(path, body, header = {}) { 
        return axios.post(`${this.uri}/${path}`, body, header);
    }

    Get(path, header = {}){
        return axios.get(`${this.uri}/${path}`, header);
    }

    Patch(path, body = {}, header = {}){
        return axios.patch(`${this.uri}/${path}`, body, header);
    }

    Delete(path, header = {}){
        return axios.delete(`${this.uri}/${path}`, header)
    }
}

class imageProvide{

    constructor(){
        this.uri =  vars.LOCAL === true 
            ? `http://localhost:${vars.IMAGEPORT}/?typeTicket=type1` 
            : `http://${vars.IMAGEIP}:${vars.IMAGEPORT}/?typeTicket=type1`;
    }

    Post(form) { 

        const header = {
            headers: { "Content-Type": "multipart/form-data" },
        }
      

        return axios.post(`${this.uri}`, form, header);
    }

}

class susuerteProvider{
    constructor(){
        this.uri =  vars.SUSUERTEHOST;
    }

    getToken(){
        const options = {
            method: 'POST',
            url: `${this.uri}/auth/login`,
            headers: {'Content-Type': 'application/json'},
            data: {username: vars.SUSUERTEUSER, password: vars.SUSUERTEPASS}
        };

        return axios.request(options)
    }

    validate(token, id){
        const options = {
            method: 'POST',
            url: `${this.uri}/prize/transaction`,
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`
            },
            data: {TRANSACCION_ID: id}
          };
        
        return axios.request(options)

    }
}

export default serviceProvider;

export {imageProvide, susuerteProvider}