import { Link, useLoaderData } from "@remix-run/react";
import { db } from '~/utils/db.server';

export const loader = async () => {
  //server side

const data = {
  posts: await db.post.findMany({
    take: 20,
    select: { id: true, title: true, createdAt: true },
    orderBy: {createdAt: 'desc'}
    })
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
              {new Date(post.createdAt).toLocaleString()}
            </Link>
          </li>
        ))}
        </ul>
    </div>
  )
}

export default PostItems
