import { combineReducers } from 'redux';
import { setStoredContacts, storedContacts } from 'utils/localStorage';

const contactsInitialState = storedContacts('contacts', []);

const contactsReducer = (state = contactsInitialState, action) => {
  switch (action.type) {
    case 'contacts/ADD':
      const contacts = [...state, action.payload];
      setStoredContacts('contacts', contacts);
      return contacts;

    case 'contacts/REMOVE':
      const newContacts = state.filter(
        contact => contact.id !== action.payload
      );
      setStoredContacts('contacts', newContacts);
      return newContacts;

    default:
      return state;
  }
};

const filterInitialState = '';

const filterReducer = (state = filterInitialState, action) => {
  switch (action.type) {
    case 'filter/SET':
      return action.payload;

    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
