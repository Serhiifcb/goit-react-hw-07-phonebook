// import * as contactsActions from './contactsActions';
import * as contactsAPI from 'services/contacts-api';
import { createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchContacts = () => async dispatch => {
//   dispatch(contactsActions.fetchContactsRequest());
//   try {
//     const contacts = await contactsAPI.fetchContacts();
//     dispatch(contactsActions.fetchContactsSuccess(contacts));
//   } catch (error) {
//     dispatch(contactsActions.fetchContactsError(error));
//   }
// };
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

export const addContact = createAsyncThunk('contacts/addContact', async () => {
  const data = await contactsAPI.deleteContact();
  return data;
});
