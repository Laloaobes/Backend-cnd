const express = require("express");
const routes = express.Router();
const Controller = require("../controllers/imagesController");
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })


async function imagesNetwork(request, response){
    const file = request.file;
   const result = await Controller.onNewImage(file.path);
   response.send(result.data);
}

async function removeImage(req, res){
    const {imageId} = req.params;
    const result = await Controller.onRemoveImage(imageId);
    res.send(result.data);
}

async function getImages(req, res){
    const result = await Controller.onGetImages();
    res.send(result.data);
}

routes.post("/upload", upload.single('file'), imagesNetwork);

routes.delete("remove/:imageId", removeImage);

routes.get("/obtain", getImages);



module.exports = routes;