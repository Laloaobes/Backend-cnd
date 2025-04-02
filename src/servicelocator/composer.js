const ServiceLocator = require('./DependecyLocator');
const Cloudflare = require('../services/cloudflare');

const dl = ServiceLocator.getInstance();
function init(){
    dl.bindLazySinglenton('Cloudflare',() =>  Cloudflare.getInstance());
}

function getCloudflareService(){
    return dl.get('Cloudflare');
}



module.exports = {init, getCloudflareService};
