import React from 'react';

import {
  YMaps,
  Map,
  Placemark,
  RouteButton,
  GeolocationControl
} from 'react-yandex-maps';

const mapStyle = {
  position: 'relative',
  top: 0,
  left: 0,
  width: '100wh',
  height: '416px',
  overflow: 'hidden',
}

export default function Yandex () {
  return (
    <YMaps
      query={{
        apikey: "afbb60c1-0761-48a5-b821-b566bf220d8b",
        lang: "UZ"
      }}
    >
      <Map
        defaultState={{
          center: [41.311081, 69.240562],
          zoom: 11,
          controls: ["zoomControl", "fullscreenControl"],
        }}
        modules={["control.ZoomControl", "control.FullscreenControl"]}
        style={mapStyle}>
        <Placemark geometry={[41.311081, 69.240562]} />
        <RouteButton options={{ float: "right" }} />
        <GeolocationControl options={{ float: "left" }} />
      </Map>
    </YMaps>
  )
}
