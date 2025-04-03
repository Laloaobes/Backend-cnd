const CloudflareService = require("../services/cloudflare");

function onNewImage(path) {
    const cloudflareService = new CloudflareService();
    return cloudflareService.uploadImages(path);
}

function onRemoveImage(imageId) {
    const cloudflareService = new CloudflareService();
    return cloudflareService.removeImage(imageId);
}

function onGetImages() {
    const cloudflareService = new CloudflareService();
    return cloudflareService.getImages();
}

module.exports = {
    onNewImage,
    onRemoveImage,
    onGetImages
}