import axios from 'axios';

axios.defaults.baseURL = 'https://63bdcdb9b4580f58110e1d88.mockapi.io/api';

export async function fetchContacts() {
  const { data } = await axios.get('/contacts');
  return data;
}

export async function deleteContact(id) {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
}

export async function addContact(contact) {
  const { data } = await axios.post('/contacts', contact);
  return data;
}
