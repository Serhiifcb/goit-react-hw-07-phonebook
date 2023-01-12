import * as contactsAPI from 'services/contacts-api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  const contacts = await contactsAPI.fetchContacts();
  return contacts;
});

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    const data = await contactsAPI.deleteContact(id);
    return data;
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    const data = await contactsAPI.addContact(contact);
    return data;
  }
);
