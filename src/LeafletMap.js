import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import React, { useCallback, useEffect, useState } from 'react';
import { map } from 'leaflet';


export function LeafletMap(props) {
    const [center, setCenter] = useState([44.5588, -72.5778]);
    const [zoom, setZoom] = useState(7);
    const [position, setPosition] = useState([44.5588, -72.5778]);
    const [map, setMap] = useState(null)

    const handleStart = useCallback(() => {
        console.log('clicked');        
        const lat = Math.random()*(45-42.74)+42.74;
        const long = Math.random()*(-71.6+73.4)-73.4;
        setPosition([lat,long]);
        map.flyTo([lat,long],9); 
    }, [map])

    return (
        <div>
            <button onClick={handleStart} className="button">Zoom to random spot</button>
            <br />
            <MapContainer center={center} zoom={zoom} whenCreated={setMap}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
            <br />
            <div>
                {position[0]}, {position[1]}
            </div>
        </div>
    )
}