import css from "../Filter/Filter.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { update } from 'redux/store';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
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