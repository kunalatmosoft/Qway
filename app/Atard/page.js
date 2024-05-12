"use client"
import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
const accessKey = process.env.NEXT_PUBLIC_IMG_GEN;

export default function MyComponent() {
  const [keyword, setKeyword] = useState('');
  const [page, setPage] = useState(1);
  const [searchResults, setSearchResults] = useState([]);

  const searchImages = async () => {
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
    const response = await fetch(url);
    const data = await response.json();
    if (page === 1) {
      setSearchResults([]);
    }
    const results = data.results;
    setSearchResults(prevResults => [...prevResults, ...results]);
  }

  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1);
    searchImages();
  }

  const handleShowMore = () => {
    setPage(prevPage => prevPage + 1);
    searchImages();
  }

  return (
    <div className="h-screen flex flex-col">
      <header className="bg-white-100 p-4">
        <h1 >Atmosearch&trade;-engine</h1>{/* className="text-2xl mb-4" */}
        <form onSubmit={handleSearch} className="mb-4">
          <Input type="text" placeholder="Search Anything here..." value={keyword} onChange={(e) => setKeyword(e.target.value)} />
          <Button type="submit" className="ml-2">Search</Button>
        </form>
      </header>
      <main className="flex-1 overflow-y-auto">
        <div className="grid grid-cols-3 gap-4 p-4">
          {searchResults.map((result, index) => (
            <div key={index} className="w-full aspect-w-1 aspect-h-1 overflow-hidden">
              <a href={result.links.html} target="_blank">
                <img src={result.urls.small} alt={`Result ${index}`} className="object-cover w-full rounded-md h-full" />
              </a>
            </div>
          ))}
        </div>
        {searchResults.length > 0 && (
          <div className="flex justify-center mb-4">
            <Button id="show-more-btn" onClick={handleShowMore}>Show more</Button>
          </div>
        )}
      </main>
    </div>
  );
}
