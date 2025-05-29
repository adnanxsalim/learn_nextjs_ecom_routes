'use client';

import { useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

export default function Search({ placeholder }: { placeholder: string }) {
  const [term, setTerm] = useState('');
//   const pathname = usePathname();
  const { replace } = useRouter();

  const searchParams = useSearchParams();

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
        params.set('q', term);
    } else {
        params.delete('q');
    }
    replace(`/search?${params.toString()}`);
  }

  return (
    <form className="relative flex flex-1 flex-shrink-0" onSubmit={() => {handleSearch(term)}}>
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        id="search"
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        defaultValue={searchParams.get('q')?.toString()}
      />
      <button
        type="submit"
        className="absolute right-2 top-1/2 -translate-y-1/2 px-2 py-1 text-sm bg-gray-200 rounded text-gray-900"
      >
        Go
      </button>
    </form>
  );
}