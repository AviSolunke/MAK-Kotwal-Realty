import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const ContactPage = () => {
  const mapContainerStyle = {
    width: "100%",
    height: "400px",
  };

  const center = {
    lat: 34.0522, // Los Angeles, CA, USA
    lng: -118.2437,
  };
  

  return (
    <div>
      <h1>Contact Us</h1>
      
      {/* Your contact information here */}

      <LoadScript
        googleMapsApiKey='AIzaSyDVhoVCcaOmSDG2MCNFEkZ5wW0e-4dAzCQ' // Replace with your API key
      >
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={15}
        >
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default ContactPage;
