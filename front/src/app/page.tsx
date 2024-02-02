import styles from "./page.module.css";

type Post = {
  id: number;
  title: string;
  body: string;
};

const getAllPosts = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
}

export default async function Home() {
  const posts: Post[] = await getAllPosts();

  return (
    <main className={styles.container}>
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
