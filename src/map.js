import 'ol/ol.css';
import Feature from 'ol/Feature';
import { Map, View } from 'ol';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import { OSM, Vector as VectorSource } from 'ol/source';
import { Point } from 'ol/geom';
import { fromLonLat } from 'ol/proj';
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style';

export function initMap({ targetId, coords }) {
  const location = fromLonLat([Number(coords.lon), Number(coords.lat)]);
  const marker = new Feature({
    geometry: new Point(location),
  });

  marker.setStyle(
    new Style({
      image: new CircleStyle({
        radius: 8,
        fill: new Fill({ color: '#0d6efd' }),
        stroke: new Stroke({ color: '#ffffff', width: 3 }),
      }),
    })
  );

  const map = new Map({
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
      new VectorLayer({
        source: new VectorSource({
          features: [marker],
        }),
      }),
    ],
    view: new View({
      center: location,
      zoom: 10.5,
    }),
    target: targetId,
  });

  return map;
}
