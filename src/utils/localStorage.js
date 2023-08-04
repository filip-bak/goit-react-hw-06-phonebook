export const storedContacts = (key, defaultValue) =>
  JSON.parse(localStorage.getItem(key)) || defaultValue;

export const setStoredContacts = (key, setContact) => {
  try {
    localStorage.setItem(key, JSON.stringify(setContact));
  } catch (err) {
    console.log(err);
  }
};
