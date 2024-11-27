'use server';

import { db } from '@/db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createSnippet(
  _formState: { message: string },
  formData?: FormData,
): Promise<{ message: string }> {
  const title = (formData?.get('title') ?? '') as string;
  const code = (formData?.get('code') ?? '') as string;

  if (typeof title !== 'string' || title.length < 3) {
    return { message: 'Title must be longer than 3 characters' };
  }

  if (typeof code !== 'string' || code.length < 10) {
    return { message: 'Code must be longer than 10 characters' };
  }

  let snippetId = 0;

  try {
    const snippet = await db.snippet.create({ data: { title, code } });
    snippetId = snippet.id;
  } catch (e: unknown) {
    if (e instanceof Error) return { message: e.message };
    else return { message: 'Something Went Wrong...' };
  }

  revalidatePath('/');
  revalidatePath(`/snippets/${snippetId}`);
  redirect(`/snippets/${snippetId}`);
}

export async function editSnippet(id: number, code: string, title: string) {
  await db.snippet.update({
    data: { code, title },
    where: { id },
  });

  revalidatePath('/');
  revalidatePath(`/snippets/${id}`);
  redirect(`/snippets/${id}`);
}

export async function deleteSnippet(id: number) {
  await db.snippet.delete({ where: { id } });
  revalidatePath('/');
  revalidatePath(`/snippets/${id}`);
  redirect('/');
}
