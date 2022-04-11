import React, {FC} from 'react';
import {MapContainer, Marker, TileLayer} from "react-leaflet";
import {LatLngExpression} from "leaflet";

interface IMapProps {
    position: LatLngExpression
}
const Map: FC<IMapProps> = ({position}) => {
    return (
        <MapContainer center={position} zoom={13}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}/>
        </MapContainer>
    )
};

export default Map;