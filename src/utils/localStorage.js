export const storedContacts = (key, defaultValue) =>
  JSON.parse(localStorage.getItem(key)) || defaultValue;

export const storeContacts = setContact => {
  try {
    localStorage.setItem('contacts', JSON.stringify(setContact));
  } catch (err) {
    console.log(err);
  }
};
