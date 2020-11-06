export const getFromStorage = key => {
  return localStorage.getItem(key);
};

export const removeFromStorage = key => {
  return localStorage.removeItem(key);
};

export const clearStorage = () => {
  const number_of_visit = localStorage.getItem("number_of_visit");
  localStorage.clear();
  if (number_of_visit) {
    localStorage.setItem("number_of_visit", number_of_visit);
  }
};

export const getAuthToken = () => localStorage.getItem("AuthToken");
