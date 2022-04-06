export interface IUser {
    id: number,
    name: string,
    email: string,
    password: string,
    selectedLocations: ILocation[],
    role: 'USER' | 'ADMIN',
}

export interface ILocation {
    id: number,
    title: string,
    coordinates: string,
    images: string[],
    description: string,
    date: Date,
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