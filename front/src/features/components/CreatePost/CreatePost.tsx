"use client";

import { useRef } from "react";
import { createPost } from "@/lib/fetchPost";
import styles from "./CreatePost.module.css";

export default function CreatePost() {
  const ref = useRef<HTMLFormElement>(null);

  return (
    <form
      ref={ref}
      action={async (formData) => {
        await createPost(formData);
        console.log("ref.current " + ref.current);
        ref.current?.reset();
      }}
      className={styles.form}
    >
      <div className={styles.formItem}>
        <label htmlFor="title">タイトル</label>
        <input
          type="text"
          name="title"
          id="title"
          required
          className={styles.formInput}
        />
      </div>
      <div className={styles.formItem}>
        <label htmlFor="body">内容</label>
        <textarea
          name="body"
          id="body"
          required
          className={styles.formTextArea}
        />
      </div>
      <button className={styles.button}>投稿</button>
    </form>
  );
}
