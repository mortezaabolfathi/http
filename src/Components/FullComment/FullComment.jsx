import React from "react";
import styles from "./FullComment.module.css";
const FullComment = ({selectedId}) => {
  return (
    <div className={styles.fullComment} >
      <h5>name  </h5> <p>{selectedId.name} </p>
      <h5>email </h5> <p> {selectedId.email}</p>
      <h5>body </h5> <p> {selectedId.body}</p>
    </div>
  );
};

export default FullComment;
