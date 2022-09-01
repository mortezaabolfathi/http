import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./FullComment.module.css";

const FullComment = ({ selectedId, setComments }) => {
  const [comment, setComment] = useState();
  
  useEffect(() => {
    if(selectedId){
      async function getCommentSInCMPFullComment() {
      try {
        const comments = await axios.get(` http://localhost:3001/comments/${selectedId}`);
        setComment(comments.data);
      } catch (error) {
        console.log(error);
      }
    }
    getCommentSInCMPFullComment();
    }
    
  }, [selectedId]);

  const deleteHandler= async ()=>{
    try{
      await axios.delete(` http://localhost:3001/comments/${selectedId}`);
      const {data}=await axios.get("http://localhost:3001/comments");
      setComments(data)
      setComment("")
    }catch(error){
      console.log("error in delete CMP fullComments", error);
    }
  }
  
  return (
    <>
      {!comment ? (
        <h3>Please select comment</h3>
      ) : (
        <div className={styles.fullComment}>
          <div className={styles.boxUseeNameANdEmail}>
            <h5>name </h5> <p>{comment.name}</p>
            <h5>email </h5> <p>{comment.email}</p>
          </div>
          <h5>{comment.body}</h5>
          <button onClick={()=>deleteHandler()}>Delete</button>
        </div>
      )}
    </>
  );
};

export default FullComment;
