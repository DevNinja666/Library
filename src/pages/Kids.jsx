import { allBooks } from "../booksData";
import BookList from "../components/BookList";

function Kids() {
  const kidsBooks = allBooks.filter((b) => b.genre === "Детям");

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">🧸 Детям</h2>
      <BookList books={kidsBooks} />
    </div>
  );
}

export default Kids;
