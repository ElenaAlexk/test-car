import { createSelector } from '@reduxjs/toolkit';
import { selectContacts } from './contactsSlice/selectors';
import { selectFilter } from './filterSlice/selectors';

export const getFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
