import prisma from '@/lib/db';

export default async function PostPage({ params }: { params: any }) {
  const post = await prisma.post.findUnique({
    where: {
      slug: params.slug,
    },
  });

  return (
    <div>
      <h1>{post?.title}</h1>
      <p>{post?.content}</p>
    </div>
  );
}
