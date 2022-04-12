import firebase from "firebase/compat";
import FieldValue = firebase.firestore.FieldValue;
import {LatLngExpression} from "leaflet";

export interface IUser {
    uid: string,
    name: string,
    email: string,
    selectedLocations: ILocation[],
    role: 'USER' | 'ADMIN',
}

export interface ILocation {
    id: string,
    name: string,
    coordinates: LatLngExpression,
    images: string[],
    description: string,
    date: FieldValue,
    rate: number,
}

export interface IComment {
    id: string,
    location: ILocation,
    author: IUser,
    text: string,
    date: Date,
}

export interface ISuggestion {
    id: string,
    author: IUser,
    image: File,
    location: ILocation,
}
