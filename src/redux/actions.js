const { nanoid } = require('nanoid');

//
// Contacts
//
export const addContact = (name, number) => {
  return {
    type: 'contacts/ADD',
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
};

export const removeContact = id => {
  return {
    type: 'contacts/REMOVE',
    payload: id,
  };
};

//
// Filter
//
export const setFilter = query => {
  return {
    type: 'filter/SET',
    payload: query.toLowerCase(),
  };
};
