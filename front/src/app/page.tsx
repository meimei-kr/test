import CreatePost from "@/features/components/CreatePost/CreatePost";
import { getAllPosts } from "@/lib/fetchPost";
import styles from "./page.module.css";

type Post = {
  id: number;
  title: string;
  body: string;
};

export default async function Home() {
  const posts: Post[] = await getAllPosts();

  return (
    <main className={styles.container}>
      <CreatePost />
      <ul className={styles.list}>
        {posts.map((post) => (
          <li key={post.id} className={styles.listItem}>
            <span>タイトル: {post.title}</span>
            <span>内容: {post.body}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}
