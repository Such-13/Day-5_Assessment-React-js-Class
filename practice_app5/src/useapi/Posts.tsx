import { useApi } from "./UseApi";
 
type Post = {
  id: number;
  title: string;
  body: string;
};
 
export default function Posts() {
  const { data: posts, loading, error } = useApi<Post[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );
 
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data</p>;
  if (!posts) return <p>No posts found</p>;
 
  return (
    <div>
      <h2>Posts</h2>
      {posts.slice(0, 5).map(post => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
}