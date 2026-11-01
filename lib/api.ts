export type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export async function getPost(id: string): Promise<Post | null> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  );

  if (!response.ok) {
    return null;
  }

  return (await response.json()) as Post;
}
