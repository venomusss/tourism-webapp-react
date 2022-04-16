import React, {FC} from 'react';
import {IComment} from "../types";

interface ICommentProps{
    commentData:IComment,
}

const Comment:FC<ICommentProps> = ({commentData}) => {
    return (
        <div className='comment-item'>
            <div style={{background:'#'+Math.floor(Math.random()*16777215).toString(16)}} className="avatar">A</div>
            <div className="comment-text">{commentData.text}</div>
            <div className="comment-date">{commentData.date.toDate().toDateString()}</div>
        </div>
    );
};

export default Comment;