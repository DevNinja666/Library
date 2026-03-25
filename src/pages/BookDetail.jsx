import { useParams, useNavigate } from "react-router-dom";
import { allBooks } from "../booksData";
import BookList from "../components/BookList";

function BookDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const book = allBooks.find((b) => b.id === parseInt(id));

  if (!book) return <p className="p-4">Книга не найдена</p>;

  const recommendations = allBooks.filter(
    (b) => b.genre === book.genre && b.id !== book.id
  );

  return (
    <div className="p-6">
      <button
        onClick={() => navigate(-1)}
        className="text-blue-600 mb-4 hover:underline"
      >
        ← Назад
      </button>

      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={book.cover}
          alt={book.title}
          className="w-64 rounded shadow"
        />

        <div>
          <h2 className="text-3xl font-bold">{book.title}</h2>
          <p className="text-gray-600 text-lg">{book.author}</p>

          <div className="text-yellow-500 mt-2">
            {"★".repeat(Math.round(book.rating || 4))}
          </div>

          <p className="mt-4">{book.description}</p>
        </div>
      </div>

      {/* рекомендации */}
      <h3 className="mt-10 text-xl font-bold">📖 Похожие книги</h3>
      <BookList books={recommendations} />
    </div>
  );
}

export default BookDetail;
