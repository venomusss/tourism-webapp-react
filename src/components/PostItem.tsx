import React, { useContext } from "react"
import Rating from "react-rating"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../firebase/AuthContext"
import { updatePostRating, changePostRating } from "../firebase/firebase"
import { ILocation, IRating } from "../types"

interface PostItemProps {
    post: ILocation
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
    const currentUser = useContext(AuthContext)
    const navigate = useNavigate()

    const handlePostDetailNavigate = () => {
        navigate(`/posts/${post.id}`)
    }

    const userId = currentUser === null ? "" : currentUser.uid

    console.log(post)
    const handleRateClick = async (value: number) => {
        await updatePostRating(post, {
            userId,
            value
        })
    }

    const handleRateChange = async (value: number) => {
        await changePostRating(post, {
            userId,
            value
        })
    }
    
    const ratingToRender = post.rating.find(rate => rate.userId === currentUser?.uid)?.value || 0
    return (
        <div className="gray-container">
            <div className="post-item-img-container">
                <img className="post-item_img" src={post.images[0]} onClick={handlePostDetailNavigate}></img>
            </div>
            <div className="white-container">
                <h3 className="post-item_title">{post.name}</h3>
                <div className="post-item_rate-section">
                    <Rating initialRating={ratingToRender} onClick={(value) => post.rating.find(rate => rate.userId === userId) ? handleRateChange(value) : handleRateClick(value)} />
                    <label>{Math.floor(post.cachedRating)}</label>
                </div>            
            </div>
        </div>
    )
}

export default PostItem