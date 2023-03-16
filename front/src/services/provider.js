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

export default serviceProvider;