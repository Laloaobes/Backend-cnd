const fs = require('fs')
const FormData = require('form-data');
const Client = require("./axios");

class Cloudflare extends Client{

    static instance;

    constructor() {
        super();
    }

    static getInstance() {
        if (Cloudflare.instance) {
            Cloudflare.instance = new Cloudflare();
        }
        return Cloudflare.instance
    }

    uploadImages(path){
        const file = fs.createReadStream(path); 
        const formData = new FormData();
        formData.append('file', file)
        const result = this.client.post('/accounts/099726f17444f118b6b6f15c147a3770/images/v1', formData) 
         fs.unlinkSync(path);
         return result;
    }

    removeImagen(imagenId){
        return this.client.delete('/accounts/099726f17444f118b6b6f15c147a3770/images/v1/${imagenId}')
    }
    
}

module.exports = Cloudflare;