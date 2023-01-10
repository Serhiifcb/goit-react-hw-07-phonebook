import css from "../Contacts/Contacts.module.css";
import { useSelector, useDispatch } from 'react-redux';
// import { remove } from 'redux/store';
import * as contactsOperations from '../../redux/contacts/contactsOperations' 
import { useEffect } from "react";
  
export const Contacts = () => {
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(contactsOperations.fetchContacts())
  }, [dispatch]);
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);
  const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  
  return (
    <div className={css.contactListBlock}>
      <ul>
        {visibleContacts.length > 0 ? (visibleContacts.map(({ id, name, number }) => (
        <li className={css.contactItem} key={id}>
          <span className={css.spanContact}></span>
            {name}: {number}
          <button className={css.buttonDeleteContact}>Видалити</button>
          {/* <button className={css.buttonDeleteContact} onClick={() => dispatch(remove(id))}>Видалити</button> */}
        </li>
          
        ))) : <p>There are no contacts</p>}
      </ul>
    </div>
  )
}