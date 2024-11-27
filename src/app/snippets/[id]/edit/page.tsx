import { SnippetEditForm } from '@/components/snippet.edit.form';
import { db } from '@/db';
import { notFound } from 'next/navigation';

export default async function EditSnippetPage(
  props: Readonly<{ params: Promise<{ id: string }> }>,
) {
  const id = parseInt((await props.params).id);

  const snippet = await db.snippet.findUnique({ where: { id } });

  if (!snippet) {
    return notFound();
  }

  return <SnippetEditForm snippet={snippet} />;
}
