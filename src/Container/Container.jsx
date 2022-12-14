import React, { useEffect, useState } from "react";
import styles from "./Container.module.css";
import Comment from "../Components/Comment/Comment,";
import FullComment from "../Components/FullComment/FullComment";
import NewComment from "../Components/newComment/NewComment";
import http from "../services/httpServices";
import {toast}  from 'react-toastify';



const Container = () => {
  const [comments, setComments] = useState();
    const [selectedId, setSelectedId]= useState()
    const [error, setError]=useState(false)
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
        const comments = await http.get("/comments");
        setComments(comments.data.slice(0, 4));
      } catch (error) {
        setError(true)
        console.log(error)
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
        {comments && !error ? (
          comments.map((c) => <Comment key={c.id} name={c.name} email={c.email} selectedCommentHandler={()=>selectedCommentHandler(c)} />)
        ) : (
          <>
          <h1> is Lodging data... </h1>
          {/* {toast.error("هیچ دیتایی تعریف نشده")} */}
          </>
        )}
      </section>
      <section>
        <FullComment selectedId={selectedId} setComments={setComments} />
      </section>
      <section>
        <NewComment setComments={setComments} />
      </section>
    </div>
  );
};

export default Container;
