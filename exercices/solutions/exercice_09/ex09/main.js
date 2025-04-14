import './style.css';
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import WMTSCapabilities from 'ol/format/WMTSCapabilities.js';
import TileLayer from 'ol/layer/Tile.js';
import WMTS, {optionsFromCapabilities} from 'ol/source/WMTS.js';

const parser = new WMTSCapabilities();
let map;

fetch('https://wmts.geo.admin.ch/EPSG/3857/1.0.0/WMTSCapabilities.xml?lang=fr')
  .then(function (response) {
    return response.text();
  })
  .then(function (text) {
    const result = parser.read(text);
    const options_1 = optionsFromCapabilities(result, {
      layer: 'ch.swisstopo.swisssurface3d-reliefschattierung-multidirektional',
      matrixSet: 'EPSG:3857',
    });

    const options_2 = optionsFromCapabilities(result, {
      layer: 'ch.swisstopo.swisstlm3d-strassen',
      matrixSet: 'EPSG:3857',
    });

    map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          opacity: 1,
          source: new WMTS(options_1),
        }),
        new TileLayer({
          opacity: 1,
          source: new WMTS(options_2),
        }),
      ],
      view: new View({
        center: [854900, 5894900],
        zoom: 8,
      }),
    });
  });

const opacityInput = document.getElementById('opacity-input');
opacityInput.addEventListener('input', () => osm.setOpacity( parseFloat(opacityInput.value)));
update();
