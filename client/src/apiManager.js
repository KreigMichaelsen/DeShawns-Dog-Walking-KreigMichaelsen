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
