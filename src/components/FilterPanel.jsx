function FilterPanel({
  genres,
  selectedGenre,
  setSelectedGenre,
  search,
  setSearch,
}) {
  return (
    <div className="mb-6">

      {/* жанры */}
      <div className="flex gap-2 mb-3 flex-wrap">
        {genres.map((g) => (
          <button
            key={g}
            onClick={() => setSelectedGenre(g)}
            className={`px-3 py-1 rounded ${
              selectedGenre === g
                ? "bg-blue-600 text-white"
                : "bg-gray-200"
            }`}
          >
            {g}
          </button>
        ))}
      </div>

      {/* поиск */}
      <input
        type="text"
        placeholder="Поиск книг..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 border rounded"
      />
    </div>
  );
}

export default FilterPanel;
