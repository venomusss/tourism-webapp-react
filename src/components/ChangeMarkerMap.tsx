import React, {FC, useState} from 'react';
import {MapContainer, Marker, TileLayer, useMapEvents} from "react-leaflet";
import {LatLngExpression, LeafletMouseEvent} from "leaflet";

const ChangeMarkerMap: FC = () => {
    const center: LatLngExpression = {
        lat: 50.44827739983516,
        lng: 30.524597066687424
    }

    const [position, setPosition] = useState<LatLngExpression>(center)

    function LocationMarker() {
        useMapEvents({
            click(e: LeafletMouseEvent) {
                setPosition(e.latlng)
            },
        })

        return position === null ? null : (
            <Marker position={position}/>
        )
    }

    return (
        <MapContainer center={position} zoom={10} style={{cursor: "pointer"}}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationMarker/>
        </MapContainer>
    );
};

export default ChangeMarkerMap;