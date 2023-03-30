import React, { useRef, useEffect } from "react";

const Map = () => {
  const googleMapRef = useRef(null);
  let googleMap = null;

  useEffect(() => {
    googleMap = initGoogleMap();
  }, []);

  const initGoogleMap = () => {
    return new window.google.maps.Map(googleMapRef.current, {
      center: { lat: 59.2762, lng: 15.2233 },
      zoom: 8,
    });
  };

  return (
    <div
      id="google-map"
      className="googleMap"
      ref={googleMapRef}
    //   style={{ width: "100%", height: "500px" }}
    style={{ width: "1200px", height: "300px" }}
    />
  );
};

export default Map;