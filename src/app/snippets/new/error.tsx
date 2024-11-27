'use client';

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

export default function ErrorForNewSnippet({
  error,
}: Readonly<ErrorPageProps>): JSX.Element {
  return <div>{error.message}</div>;
}
