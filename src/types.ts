import firebase from "firebase/compat";
import FieldValue = firebase.firestore.FieldValue;

export interface IUser {
    id: string,
    name: string,
    email: string,
    selectedLocations: ILocation[],
    role: 'USER' | 'ADMIN',
}

export interface ILocation {
    id: number,
    title: string,
    coordinates: string,
    images: string[],
    description: string,
    date: FieldValue,
}

export interface IComment {
    id: number,
    location: ILocation,
    author: IUser,
    text: string,
    date: Date,
}

export interface Suggestion {
    id: number,
    author: IUser,
    image: File,
    location: ILocation,
}
