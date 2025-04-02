const {getCloudflareService} = require('../servicelocator/composer')

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
    onRemoveImage
};
