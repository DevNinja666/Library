import { NavLink } from "react-router-dom";

function Header() {
  const linkClass = ({ isActive }) =>
    isActive ? "underline font-bold" : "hover:underline";

  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">📚 Library</h1>

      <nav className="flex gap-4">
        <NavLink to="/" className={linkClass}>Главная</NavLink>
        <NavLink to="/catalog" className={linkClass}>Каталог</NavLink>
        <NavLink to="/kids" className={linkClass}>Детям</NavLink>
        <NavLink to="/favorites" className={linkClass}>Избранное</NavLink>
        <NavLink to="/login" className={linkClass}>Логин</NavLink>
        <NavLink to="/contact" className={linkClass}>Контакты</NavLink>
      </nav>
    </header>
  );
}

export default Header;
