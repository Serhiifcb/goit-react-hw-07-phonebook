import css from "./Filter.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { update } from 'redux/filterSlice';
import { contactsSelectors } from 'redux/contacts';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(contactsSelectors.getFilter);
  const changeFilter = event => {
    dispatch(update(event.currentTarget.value));
  }
  return (
    <div className={css.filterBlock}>
      <label>
        Find contacts by name <br />
        <input type="text" value={filter} className={css.inputFilter} onChange={changeFilter} />
      </label>
    </div>
  )
}