import React from 'react';
import styles from "./Comment.module.css";
const Comment = ({name, email, selectedCommentHandler}) => {
    return ( 
        <div className={styles.comment} onClick={selectedCommentHandler}>
            <h5>name :</h5> <p>{name} </p> 
            <h5>email: </h5> <p>{email}</p> 
        </div>
     );
}
 
export default Comment;