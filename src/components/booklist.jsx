import BookCard from "./BookCard";

function BookList({ books }) {
  if (!books.length) {
    return <p className="text-gray-500">Ничего не найдено</p>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}

export default BookList;
