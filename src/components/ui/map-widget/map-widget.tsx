"use client";

import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
} from "@vis.gl/react-google-maps";
import clsx from "clsx";
import s from "./map-widget.module.scss";

export default function MapWidget() {
  const positions = [
    { lat: 53.54, lng: 10 },
    { lat: 53.5, lng: 9.9 },
    { lat: 53.51, lng: 10.1 },
  ];

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}>
      <div className={clsx(s.map)}>
        <Map
          zoom={10}
          center={positions[0]}
          mapId={process.env.NEXT_PUBLIC_MAP_ID}
        >
          {positions.map((position, index) => {
            return (
              <AdvancedMarker position={position} key={index}>
                <Pin />
              </AdvancedMarker>
            );
          })}
        </Map>
      </div>
    </APIProvider>
  );
}
