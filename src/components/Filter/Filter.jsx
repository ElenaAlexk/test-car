import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice/filterSlice';
import css from '../Contacts.module.css';

export const Filter = ({ filter }) => {
  const dispatch = useDispatch();
  const onChangeFilter = e => dispatch(setFilter(e.target.value));

  return (
    <>
      <h2>Contacts</h2>
      <div>
        <label className={css.formLabel}>
          Find contacts by name
          <input
            className={css.formInput}
            type="text"
            value={filter}
            onChange={onChangeFilter}
          />
        </label>
      </div>
    </>
  );
};
