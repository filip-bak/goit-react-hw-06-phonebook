import styles from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/actions';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => dispatch(setFilter(e.target.value));

  return (
    <div>
      <label className={styles.label}>
        Find contacts by name
        <input
          className={styles.input}
          type="text"
          name="filter"
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default Filter;
