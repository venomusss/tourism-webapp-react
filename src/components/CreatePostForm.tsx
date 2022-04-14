import React, {FC, useRef, useState} from 'react';
import ChangeMarkerMap from "./ChangeMarkerMap";
import {ICoordinates} from "../types";
import {addLocation} from "../firebase/firebase";
import {uploadFile} from "../firebase/firebase";

const CreatePostForm: FC = () => {
    const nameRef = useRef<HTMLInputElement>(null)
    const descriptionRef = useRef<HTMLTextAreaElement>(null);
    const [coordinates, setCoordinates] = useState<null | ICoordinates>({
        lat: 50.44827739983516,
        lng: 30.524597066687424
    })
    const filesRef = useRef<HTMLInputElement>(null)

    const [urls, setUrls] = useState<string[]>([]);

    const handleMapClick = (coordinates: ICoordinates) => {
        setCoordinates(coordinates)
    }

    const handleChangeFiles = () => {
        if (filesRef.current?.files === undefined || filesRef.current?.files === null) return
        Promise.all(Array.from(filesRef.current?.files).map(uploadFile)).then(setUrls)
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (nameRef.current?.value === undefined
            || descriptionRef.current?.value === undefined
            || coordinates === null
            || urls.find(e => e === undefined)
        ) return
        addLocation(
            nameRef.current?.value,
            descriptionRef.current?.value,
            urls,
            coordinates).then()
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Location name
                    <input type="text" ref={nameRef}/>
                </label>
                <label>
                    Description
                    <textarea ref={descriptionRef}/>
                </label>
            </div>
            <div>
                <div>Coordinates</div>
                <ChangeMarkerMap onMapClick={handleMapClick}/>
                <div>Add photos</div>
                <input type={"file"} ref={filesRef} onChange={() => handleChangeFiles()} multiple/>
            </div>
            <button onClick={handleSubmit}>Add post</button>
        </form>
    );
};

export default CreatePostForm;