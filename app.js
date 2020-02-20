const lugar = require('./lugar/lugar.js');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: "d",
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


const getInfo = async(dir) => {
    try {
        const lug = await lugar.getLugarLatLng(dir);
        const clim = await clima.getClima(lug.lat, lug.lng);
        return `El clima de ${lug.direccion} es de ${clim}`;
    } catch (e) {
        return (`No se pudo determinar el clima de ${dir}`);
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)