import { Suspense } from "react";
import PostsW from "./PostsW";
 
export default function Page() {
  return (
    <div>
      <h1>Posts (using React use() hook)</h1>
      {/* Suspense handles the pending promise with a fallback UI */}
      <Suspense fallback={<p>Loading...</p>}>
        <PostsW />
      </Suspense>
    </div>
  );
}
 