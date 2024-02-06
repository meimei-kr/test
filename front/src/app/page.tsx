import CreatePost from "@/app/features/components/CreatePost/CreatePost";
import { getAllPosts } from "@/app/features/lib/fetchPost";
import styles from "@/app/page.module.css";

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
