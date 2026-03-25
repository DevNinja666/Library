import { useEffect, useState } from "react";
import { getFavorites } from "../utils/favoriteUtils";
import { allBooks } from "../booksData";
import BookList from "../components/BookList";

function Favorites() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const favIds = getFavorites();
    const favBooks = allBooks.filter((b) => favIds.includes(b.id));
    setBooks(favBooks);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">❤️ Избранное</h2>

      {books.length === 0 ? (
        <p className="text-gray-500">
          У тебя пока нет избранных книг
        </p>
      ) : (
        <BookList books={books} />
      )}
    </div>
  );
}

export default Favorites;
