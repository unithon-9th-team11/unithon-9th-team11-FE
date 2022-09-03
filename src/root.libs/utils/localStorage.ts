export const getStoreItem = (key: string): string | null => {
  return localStorage.getItem(key);
};

export const setStoreItem = (key: string, value: string): void => {
  localStorage.setItem(key, value);
};

export const removeStoreItem = (key: string): void => {
  localStorage.removeItem(key);
};
