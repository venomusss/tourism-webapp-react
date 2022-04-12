import React from "react";
import {NavLink} from "react-router-dom";
import Map from "../../components/Map";
import CommentForm from "../../components/CommentForm";

const PostDetailPage: React.FC = () => {

    return (
        <div className='page-container'>
            <div className='back'>
                <NavLink className='back-link' to='/'>
                    <svg className='arrow' xmlns="http://www.w3.org/2000/svg" width="25" height="20" viewBox="0 0 30 24"
                         fill="none">
                        <path
                            d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97918 12.6066 1.3934C12.0208 0.807612 11.0711 0.807612 10.4853 1.3934L0.93934 10.9393ZM30 10.5L2 10.5L2 13.5L30 13.5L30 10.5Z"
                            fill="black"/>
                    </svg>
                    Back
                </NavLink>
            </div>
            <div className="gray-container">
                <div className="white-container first">
                    <div className="location-image-container">
                        <img
                            src="https://img1.akspic.ru/crops/1/3/0/7/6/167031/167031-nacionalnyj_park_banf-morennoe_ozero-banff-ozero_pejto-luk_ozero-3840x2160.jpg"
                            alt="" className="location-image"/>
                    </div>
                    <div className="location-text">
                        <div className="text-top">
                            <div className="location-title">Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry
                            </div>
                            <div className="rating">Rating</div>
                        </div>
                        <div className="text-description">Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                            1500s, when an unknown printer took a galley of type and scrambled it to make a type
                            specimen book. It has survived not only five centuries, but also the leap into electronic
                            typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </div>
                    </div>
                </div>
                <div className="white-container add">
                    <div className="add-text">Add this place to favourites</div>
                    <button className="add-button">+</button>
                </div>
                <div className="white-container map-container">
                    <Map position={{
                        lat: 50.44827739983516,
                        lng: 30.524597066687424
                    }}/>
                </div>
                <div className="white-container add">
                    <div className="add-text">If you have any pictures from this place you can propose them</div>
                    <button className="add-button">+</button>
                </div>
                <div className="white-container comments">
                    <CommentForm/>
                </div>
            </div>
        </div>
    )
}

export default PostDetailPage
