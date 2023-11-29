import { Link, useLoaderData } from "@remix-run/react";

export const loader = () => {
  //server side

  const data = {
    posts: [
      {id: 1, title: "Post 1", body: "This is a test post"},
      {id: 2, title: "Post 2", body: "This is a test post"},
      {id: 3, title: "Post 3", body: "This is a test post"},
      {id: 4, title: "Post 4", body: "This is a test post"},
    ]
  }
  return data;
}

function PostItems() {
  const { posts } = useLoaderData();

  return (
    <div>
      <div className="page-header">        
        <h1>Posts</h1>
        <Link to='/posts/new' className="btn"> New Post </Link>
      </div>
      <ul className="posts-list">
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>
              <h3>{post.title}</h3>
            </Link>
          </li>
        ))}
        </ul>
    </div>
  )
}

export default PostItems
