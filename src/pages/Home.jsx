import { allBooks } from "../booksData";
import BookList from "../components/BookList";
import PromoBanner from "../components/PromoBanner";

function Home() {
  const popular = [...allBooks].sort((a, b) => b.rating - a.rating);

  return (
    <div className="p-4">
      <PromoBanner />

      <h2 className="text-xl font-bold mb-4">🔥 Популярные книги</h2>
      <BookList books={popular} />
    </div>
  );
}

export default Home;
