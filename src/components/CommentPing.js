import React from 'react';

const CommentPing = ({comment}) => {
    return (
        <li className="comment-item">
            <h3>Name: {comment.author}</h3>
            <p>Comment: </p>
            <p className="comment-item-comment">{comment.body}</p>
            
        </li>
    );
}

export default CommentPing;
