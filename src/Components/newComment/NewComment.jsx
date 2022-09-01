import React,{useState} from "react";
import styles from "./newComment.module.css";
import http from "../../services/httpServices";


const NewComment = ({setComments}) => {

  const [newComment,setNewComment]=useState({
    name:"",
    email:"",
    contacts :""
  })

  const addNewCommentInput = (e)=> {
    setNewComment({...newComment,[e.target.name]:e.target.value})
  }

  const addDataInApi=()=>{
    http.post("/comments",newComment)
    .then(()=> http.get("/comments").then((rev)=>setComments(rev.data))  
    ).catch()
  }
  return (
    <div className={styles.newComment}>
      <h2>ADD NEW COMMENT</h2>
      <div>
        <label>name</label>
        <input type="text" name="name" onChange={(e)=>addNewCommentInput(e)} />
      </div>
      <div>
        <label>email</label>
        <input type="email"  name="email" onChange={(e)=>addNewCommentInput(e)}/>
      </div>
      <div>
        <label>body</label>
        <input type="textarea" name="contacts" onChange={(e)=>addNewCommentInput(e)}/>
      </div>
      <div>
        <button onClick={()=>addDataInApi()}>add New Comment</button>
      </div>
    </div>
  );
};

export default NewComment;
