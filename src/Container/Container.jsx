import React, { useEffect, useState } from "react";
import styles from "./Container.module.css";
import Comment from "../Components/Comment/Comment,";
import FullComment from "../Components/FullComment/FullComment";
import NewComment from "../Components/newComment/NewComment";
import axios from "axios";

const Container = () => {
  const [comments, setComments] = useState();
    const [selectedId, setSelectedId]= useState()
  // 1_method(promise then catch)
  // useEffect(()=>{
  //     axios.get("https://jsonplaceholder.typicode.com/comments").then((response)=>{
  //         setComments(response.data.slice(0,4));
  //     }).catch((error)=>{
  //         console.log(error);
  //     })
  // },[])

  // 2_method (async await)
  //2_1 function out of useEffect
  // async function getCommentS()  {
  //     try{
  //        const comments= await axios.get("https://jsonplaceholder.typicode.com/comments")
  //         setComments(comments.data.slice(0,4))
  //     }catch (error){
  //         console.log(error)
  //     }
  // }
  //2_2 function in useEffect
  useEffect(() => {
    async function getCommentS() {
      try {
        const comments = await axios.get(" http://localhost:3001/comments");
        setComments(comments.data.slice(0, 4));
      } catch (error) {
        console.log(error);
      }
    }
    getCommentS();
  }, []);

  

  const selectedCommentHandler=(c)=>{
    setSelectedId(c.id)
  }

  return (
    <div className={styles.container}>
      <section>
        {comments ? (
          comments.map((c) => <Comment key={c.id} name={c.name} email={c.email} selectedCommentHandler={()=>selectedCommentHandler(c)} />)
        ) : (
          <h1> is Lodging data... </h1>
        )}
      </section>
      <section>
        <FullComment selectedId={selectedId} />
      </section>
      <section>
        <NewComment setComments={setComments} />
      </section>
    </div>
  );
};

export default Container;
