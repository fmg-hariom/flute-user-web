// "use client";

// import React, { useRef } from "react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";

// const MapComponent = () => {
//   const mapRef = useRef(null);

//   const latitude = 26.9024618;
//   const longitude = 75.7487774;

//   const customIcon = new L.Icon({
//     iconUrl:
//       "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
//     iconSize: [25, 41],
//     iconAnchor: [12, 41],
//     popupAnchor: [1, -34],
//     shadowSize: [41, 41],
//   });

//   return (
//     <MapContainer
//       center={[latitude, longitude]}
//       zoom={13}
//       ref={mapRef}
//       style={{ height: "100%", width: "100%", borderRadius: "10px" }}
//     >
//       <TileLayer
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//       <Marker position={[latitude, longitude]} icon={customIcon}>
//         <Popup>
//           <div style={{ textAlign: "center" }}>
//             <div style={{ fontSize: "32px" }}>Fun max Games</div>
//             <b style={{ fontSize: "30px" }}>A-63, Vidhyut Nagar</b>
//             <br />
//             <span style={{ fontSize: "30px" }}>Jaipur, Rajasthan 302021</span>
//           </div>
//         </Popup>
//       </Marker>
//     </MapContainer>
//   );
// };

// export default MapComponent;
