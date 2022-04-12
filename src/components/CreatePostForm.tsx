import React, {FC} from 'react';
import ChangeMarkerMap from "./ChangeMarkerMap";

const CreatePostForm: FC = () => {
    return (
        <form>
            <div>
                <label>
                    Location name
                    <input className={"form-input"}/>
                </label>
                <label>
                    Description
                    <textarea/>
                </label>
            </div>
            <div>
                <div>Coordinates</div>
                <ChangeMarkerMap/>
                <div>Add photos</div>
                <button>+</button>
            </div>
            <button>Add post</button>
        </form>
    );
};

export default CreatePostForm;