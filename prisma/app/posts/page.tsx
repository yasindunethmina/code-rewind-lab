import { createPost } from '@/actions/actions';
import prisma from '@/lib/db';
import Link from 'next/link';

export default async function PostPage() {
  const user = await prisma.user.findUnique({
    where: {
      email: 'john@gmail.com',
    },
  });

  const postsCount = await prisma.post.count();
  console.log(postsCount);

  return (
    <div>
      <form action={createPost}>
        <input
          name="title"
          type="text"
          placeholder="Title"
          className="text-black"
        />
        <input
          name="content"
          type="text"
          placeholder="Content"
          className="text-black"
        />
        <button type="submit">Create Post</button>
      </form>

      <ul>
        <h1>All Posts {posts.length}</h1>

        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
