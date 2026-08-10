export const increase = (prev, id) => ({
  ...prev,
  [id]: (prev[id] || 0) + 1,
});

export const decrease = (prev, id) => ({
  ...prev,
  [id]: Math.max((prev[id] || 1) - 1, 0),
});