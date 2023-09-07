export const getGreeting = async () => {
  const res = await fetch("/api/hello");
  return res.json();
};

export const getDogs = async () => {
  const res = await fetch("/dogs");
  return res.json();
};

export const getDog = async (id) => {
  const res = await fetch(`/dogs/${id}`);
  return res.json();
};

export const getWalkers = async () => {
  const res = await fetch("/walkers");
  return res.json();
};

export const getWalker = async (id) => {
  const res = await fetch(`/walkers/${id}`);
  return res.json();
};

export const getFilteredWalkers = async (cityId) => {
  const res = await fetch(`/filteredWalkers/${cityId}`);
  return res.json();
};

export const getCities = async () => {
  const res = await fetch("/cities");
  return res.json();
};

export const getCity = async (id) => {
  const res = await fetch(`/cities/${id}`);
  return res.json();
};

