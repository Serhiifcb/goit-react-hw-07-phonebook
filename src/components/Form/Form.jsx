import React from "react";
import css from "../Form/Form.module.css"
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { add } from "redux/store";

export const Form = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (contacts.some(element => (element.name.toLowerCase() === form.elements.name.value.toLowerCase()))) {
      alert(`User ${form.elements.name.value} is already in contacts`);
      return;
    }
    if (contacts.some(element => (element.number.toLowerCase() === form.elements.number.value.toLowerCase()))) {
      alert(`Number ${form.elements.number.value} is already in contacts`);
      return;
    }
    // dispatch(add({
    //   id: nanoid(8),
    //   name: form.elements.name.value,
    //   number: form.elements.number.value
    // }))
    form.reset();
  };

  return (
      <div className={css.phonebookBlock}>
        <form onSubmit={handleSubmit} className={css.formBlock}>  
          <label>
            Name
            <br />
            <input
              className={css.inputForm}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <br />
          <label>
            Number <br />
            <input
              className={css.inputForm}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <br />
          <button type="submit" className={css.addContactButton}>Add contact</button>
        </form>
      </div>
    )
}