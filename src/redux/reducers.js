import { createReducer } from '@reduxjs/toolkit';
import { storeContacts, storedContacts } from 'utils/localStorage';
import { addContact, removeContact, setFilter } from './actions';

const contactsInitialState = storedContacts('contacts', []);

export const contactsReducer = createReducer(contactsInitialState, {
  [addContact]: (state, action) => {
    storeContacts([...state, action.payload]);
    return [...state, action.payload];
  },
  [removeContact]: (state, action) => {
    const newContacts = state.filter(contact => contact.id !== action.payload);
    storeContacts(newContacts);
    return newContacts;
  },
});

const filterInitialState = '';

export const filterReducer = createReducer(filterInitialState, {
  [setFilter]: (state, action) => action.payload,
});
