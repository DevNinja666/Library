import { Link } from "react-router-dom";
import { useState } from "react";
import { toggleFavorite, getFavorites } from "../utils/favoriteUtils";

function BookCard({ book }) {
  const [fav, setFav] = useState(getFavorites().includes(book.id));

  return (
    <div className="bg-white shadow rounded p-3 relative hover:scale-105 transition duration-300">

      <Link to={`/book/${book.id}`}>
        <img src={book.cover} alt={book.title} className="h-60 w-full object-cover rounded"/>

        <h3 className="font-bold mt-2">{book.title}</h3>
        <p className="text-gray-600">{book.author}</p>

        {/* ⭐ рейтинг */}
        <div className="text-yellow-500 mt-1">
          {"★".repeat(Math.round(book.rating || 4))}
        </div>
      </Link>

      {/* ❤️ избранное */}
      <button
        onClick={() => {
          toggleFavorite(book.id);
          setFav(!fav);
        }}
        className={`absolute top-2 right-2 text-xl ${
          fav ? "text-red-500" : "text-gray-400 hover:text-red-500"
        }`}
      >
        ♥
      </button>
    </div>
  );
}

export default BookCard;
