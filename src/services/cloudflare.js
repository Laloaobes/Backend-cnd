const fs = require('fs')
const FormData = require('form-data');
const Client = require("./axios");

class Cloudflare extends Client{

    constructor() {
        super();
    }

    async uploadImages(path){
        const file = fs.createReadStream(path); 
        const formData = new FormData();
        formData.append('file', file)
        const result = await this.client.post('/accounts/099726f17444f118b6b6f15c147a3770/images/v1', formData);
        fs.unlinkSync(path); //elimina el archivo despies de subir a cloudflare
        return result;
    } 


    async removeImage(imageId){
        return this.client.delete(`/accounts/099726f17444f118b6b6f15c147a3770/images/v1/${imageId}`); 
    }

    async getImages(){
        return this.client.get(`/accounts/099726f17444f118b6b6f15c147a3770/images/v1`); 
    }


}

module.exports = Cloudflare;