import React from "react";
import styles from "./header.module.css";
const header = () => {
  return (
    <div className={styles.header}>
      <h1>this is header</h1>
      <button className={styles.btn}>login</button>
    </div>
  );
};

export default header;
