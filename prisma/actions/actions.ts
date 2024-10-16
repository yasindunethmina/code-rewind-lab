'use server';

import prisma from '@/lib/db';
import { Prisma } from '@prisma/client';
import { revalidatePath } from 'next/cache';

export async function createPost(formData: FormData) {
  try {
    await prisma.post.create({
      data: {
        title: formData.get('title') as string,
        slug: (formData.get('title') as string)
          .replace(/\s+/g, '-')
          .toLowerCase(),
        content: formData.get('content') as string,
        author: {
          connect: {
            email: 'john@gmail.com',
          },
        },
      },
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
    }
  }

  revalidatePath('/posts');
}
