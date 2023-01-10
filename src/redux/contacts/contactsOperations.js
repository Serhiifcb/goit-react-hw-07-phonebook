import * as contactsActions from './contactsActions';
import * as contactsAPI from '../../services/contacts-api';

export const fetchContacts = () => async dispatch => {
  dispatch(contactsActions.fetchContactsRequest());
  try {
    const contacts = await contactsAPI.fetchContacts();
    dispatch(contactsActions.fetchContactsSuccess(contacts));
  } catch (error) {
    dispatch(contactsActions.fetchContactsError(error));
  }
};
