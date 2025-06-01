import { useState } from "react";

const SearchForm = ({ onSearch }) => {
  const [query, setQuery] = useState(onSearch);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query); // Pass search query to parent component
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2  p-2 rounded-lg shadow-md"
    >
      <input
        type="text"
        placeholder="Search by name/location"
        className="w-full p-2 outline-none rounded-md "
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="button"
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
      >
        Search
      </button>
    </form>
  );
};

export default SearchForm;
