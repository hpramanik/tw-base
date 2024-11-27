import { deleteSnippet } from '@/actions';
import { db } from '@/db';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function SnippetShowPage(
  props: Readonly<{ params: Promise<{ id: string }> }>,
) {
  const id = parseInt((await props.params).id);

  const snippet = await db.snippet.findUnique({ where: { id } });

  if (!snippet) {
    return notFound();
  }

  const deleteSnippetAction = deleteSnippet.bind(null, id);

  return (
    <div>
      <div className="flex m-4 justify-between items-center">
        <h1 className="text-xl font-bold">{snippet.title}</h1>
        <div className="flex gap-4">
          <Link
            href={`/snippets/${snippet.id}/edit`}
            className="p-2 border rounded"
          >
            Edit
          </Link>
          <form action={deleteSnippetAction}>
            <button type="submit" className="p-2 border rounded">
              Delete
            </button>
          </form>
        </div>
      </div>
      <pre className="p-3 border rounded bg-gray-200 border-gray-200">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
}

export const generateStaticParams = async () => {
  const snippets = await db.snippet.findMany({ select: { id: true } });

  return snippets.map(({ id }) => {
    return { id: id.toString() };
  });
};
