const controllerImages = require("../network/imagesNetwork")

function routes (app) {
    app.use("/images", controllerImages)
}

module.exports = routes