export type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export async function getPost(id: string): Promise<Post | null> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${encodeURIComponent(id)}`,
  );
  if (!response.ok) return null;
  return response.json();
}

export async function getPosts(page: number, limit = 6): Promise<Post[]> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`,
  );

  if (!response.ok) throw new Error("Could not load posts");
  return response.json();
}
