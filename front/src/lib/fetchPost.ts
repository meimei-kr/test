"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const getAllPosts = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });
  return res.json();
};

export const createPost = async (formData: FormData) => {
  const title = formData.get("title");
  if (!title) {
    throw new Error("タイトルが入力されていません");
  }

  const body = formData.get("body");
  if (!body) {
    throw new Error("本文が入力されていません");
  }

  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, body }),
  });

  revalidatePath("/");
  redirect("/");
};
