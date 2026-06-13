import { useEffect, useRef } from "react";
import { initMap } from "./map";

export default function MapView({ coords }) {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!coords) return;
    const map = initMap({ targetId: "map-container", coords });
    const timer = setTimeout(() => {
      map.updateSize();
    }, 100);

    return () => {
      clearTimeout(timer);
      map.setTarget(undefined);
    };
  }, [coords]);

  return (
    <div
      style={{
        width: "50%",
        height: "500px",
        marginLeft: "10px",
        borderRadius: "20px",
        backgroundColor: "whitesmoke",
        padding: "10px",
        overflow: "hidden",    
        boxSizing: "border-box",
        // marginButtom:"20px",
      }}
    >
      <div
        id="map-container"
        ref={mapRef}
        style={{ width: "100%", height: "100%" }} 
      />
    </div>
  );
}