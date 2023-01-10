import { createAction } from '@reduxjs/toolkit';

export const fetchContactsRequest = createAction(
  'contacts/fetchContactRequest'
);
export const fetchContactsSuccess = createAction(
  'contacts/fetchContactSuccess'
);
export const fetchContactsError = createAction('contacts/fetchContactError');
