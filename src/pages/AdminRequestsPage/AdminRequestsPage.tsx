import React, {useEffect, useState} from "react"
import AdminNavigationPanel from "../../components/AdminNavigationPanel";
import {getProposes} from "../../firebase/firebase";
import {IPropose} from "../../types";
import Propose from "../../components/Propose";

const AdminRequestsPage: React.FC = () => {
    const [proposes, setProposes] = useState<IPropose[]>([]);

    const filterProposes = (id: string) => {
        setProposes(proposes.filter(e => e.id !== id))
    }

    useEffect(() => {
        getProposes().then(r =>
            r.map((propose) => {
                const author = propose.data().author
                const location = propose.data().location
                setProposes([...proposes, {
                    id: propose.id,
                    author: {
                        name: author.name,
                        uid: author.uid,
                        selectedLocations: author.selectedLocations,
                        role: author.role,
                        email: author.email,
                    },
                    images: propose.data().images,
                    date: propose.data().date,
                    location: {
                        name: location.name,
                        coordinates: location.coordinates,
                        images: location.images[0],
                        date:location.date,
                        rating:location.rating,
                        cachedRating:location.cachedRating,
                        id: location.id,
                        comments: location.comments,
                        description: location.description,
                    },
                }])
            }))
    }, [])

    return (
        <div className='page-container'>
            <AdminNavigationPanel/>
            <h1>Suggestions of the users</h1>
            {proposes.map(propose =>
                <Propose propose={propose} filterProposes={filterProposes} key={propose.author.uid + propose.date}/>
            )}
        </div>
    )
}

export default AdminRequestsPage
