import { useState } from "react";
import { allBooks, genres } from "../booksData";
import BookList from "../components/BookList";
import FilterPanel from "../components/FilterPanel";

function Catalog() {
  const [selectedGenre, setSelectedGenre] = useState("Все");
  const [search, setSearch] = useState("");

  let books =
    selectedGenre === "Все"
      ? allBooks
      : allBooks.filter((b) => b.genre === selectedGenre);

  books = books.filter(
    (b) =>
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">📚 Каталог</h2>

      <FilterPanel
        genres={genres}
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
        search={search}
        setSearch={setSearch}
      />

      <BookList books={books} />
    </div>
  );
}

export default Catalog;
