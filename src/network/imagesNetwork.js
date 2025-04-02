const express = require('express');
const Controller = require("../controllers/imagesController");
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const routes = express.Router();


async function imagesNetwork(request, response) {
    const file = request.file; 
    const result = await Controller.onNewImage(file.path);
    response.send(result.data);
}

async function onNewImage(req, res) {
    const {imagenId}= req.params;
    const result = await Controller.onRemoveImage(imagenId);
    res.send(result.data);
}

routes.post("/upload", upload.single('file'), imagesNetwork);
routes.delete("/remove/:imagenId", onNewImage);

module.exports = routes;