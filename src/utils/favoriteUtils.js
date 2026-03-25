export const getFavorites = () => {
  const data = localStorage.getItem("favorites");
  return data ? JSON.parse(data) : [];
};

export const toggleFavorite = (id) => {
  let fav = getFavorites();

  if (fav.includes(id)) {
    fav = fav.filter((f) => f !== id);
  } else {
    fav.push(id);
  }

  localStorage.setItem("favorites", JSON.stringify(fav));
};
