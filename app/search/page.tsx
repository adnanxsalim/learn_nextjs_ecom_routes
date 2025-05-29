'use client';

import { useSearchParams } from 'next/navigation';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q');
  
  if (!query) {
    return <div>No search query provided.</div>;
  }

  return (
    <div>
      <h1>Search results for: {query}</h1>
    </div>
  );
}
