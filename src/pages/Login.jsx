import { useState } from "react";

function Login() {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    phone: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Подключи Axios к бекенду 😉");
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh] bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow w-80"
      >
        <h2 className="text-xl mb-4 text-center">Вход</h2>

        <input
          placeholder="Имя"
          className="w-full mb-3 p-2 border"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          placeholder="Фамилия"
          className="w-full mb-3 p-2 border"
        />

        <input
          placeholder="+994..."
          className="w-full mb-3 p-2 border"
        />

        <input
          type="password"
          placeholder="Пароль"
          className="w-full mb-4 p-2 border"
        />

        <button className="w-full bg-blue-600 text-white p-2 rounded">
          Войти
        </button>
      </form>
    </div>
  );
}

export default Login;
