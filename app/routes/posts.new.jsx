import { redirect } from "@remix-run/node";
import { Form, Link } from "@remix-run/react";
import { db } from '~/utils/db.server';

export const action = async ({ request }) => {
  const form = await request.formData();
  const title = form.get("title");
  const body = form.get("body");

  const fields = { title, body };

  const post = await db.post.create({data: fields})

  return redirect(`/posts/${post.id}`);
}

function NewPost() {  
  return (
    <>
      <div className="page-header">
        <h1>New Post</h1>
        <Link to="/posts" className="btn btn-reverse">Back</Link>
      </div>

      <div className="page-content">
        <Form method='POST'>
          <div className="form-control">
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" />
          </div>
          <div className="form-control">
            <label htmlFor="body">Post Body</label>
            <textarea name="body" id="body" />
            <button type="submit" className="btn btn-block">Add Post</button>
          </div>
        </Form>
      </div>
    </>
  )
}

export default NewPost;

