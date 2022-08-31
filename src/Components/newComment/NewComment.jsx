import React from "react";
import styles from "./newComment.module.css";
const NewComment = () => {
  return (
    <div className={styles.newComment}>
      <div>
        <label>name</label>
        <input type="text" />
      </div>
      <div>
        <label>email</label>
        <input type="email" />
      </div>
      <div>
        <label>body</label>
        <input type="textarea" />
      </div>
    </div>
  );
};

export default NewComment;
