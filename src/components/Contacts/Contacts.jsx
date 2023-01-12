import css from "./Contacts.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from 'redux/contacts'; 
import { useEffect } from "react";
  
export const Contacts = () => {
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(contactsOperations.fetchContacts())
  }, [dispatch]);
  const contacts = useSelector(contactsSelectors.getContacts);
  const filter = useSelector(contactsSelectors.getFilter);
  const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  const deleteItem = (id) => {
    dispatch(contactsOperations.deleteContact(id));
  }
  
  return (
    <div className={css.contactListBlock}>
      <ul>
        {visibleContacts.length > 0 ? (visibleContacts.map(({ id, name, number }) => (
        <li className={css.contactItem} key={id}>
          <span className={css.spanContact}></span>
            {name}: {number}
          <button className={css.buttonDeleteContact} onClick={() => deleteItem(id)}>Видалити</button>
        </li>
          
        ))) : <p>There are no contacts</p>}
      </ul>
    </div>
  )
}