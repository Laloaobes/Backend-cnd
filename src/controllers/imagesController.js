const { getCloudflareService } = require('../servicelocator/composer');
const express = require('express');
const router = express.Router();

async function onGetImages() { 
    const cloudflareService = getCloudflareService();
    return cloudflareService.getImages();
}

function onNewImage(path) {
    const cloudflareService = getCloudflareService();
    return cloudflareService.uploadImages(path);
}

function onRemoveImage(imagenId) {
    const cloudflareService = CloudflareService.getInstance();
    return cloudflareService.removeImage(imagenId);
} 

module.exports = {
    onNewImage,
    onRemoveImage,
    onGetImages
};
