"use client";
import { use } from "react";
 
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
 
function fetchPosts(): Promise<Post[]> {
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json());
}
 
//  Promise must be created OUTSIDE the component (outside rendering loop)
const postsPromise = fetchPosts();
 
export default function PostsW() {
  // use() suspends the component until the promise resolves
  const posts = use(postsPromise);
 
  return (
    <div>
      <h2>Posts List</h2>
      {posts.slice(0, 5).map((post: Post) => (
        <div key={post.id} style={{ marginBottom: "12px" }}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}