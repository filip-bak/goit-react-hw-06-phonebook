import { createAction } from '@reduxjs/toolkit';

const { nanoid } = require('nanoid');

//
// Contacts
//
export const addContact = createAction('contacts/ADD', (name, number) => {
  return {
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
});

export const removeContact = createAction('contacts/REMOVE');

//
// Filter
//
export const setFilter = createAction('filter/SET', id => {
  return {
    payload: id.toLowerCase(),
  };
});
