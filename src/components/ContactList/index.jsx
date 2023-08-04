import styles from './ContactList.module.css';

import { getContacts, getFilter } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from 'redux/actions';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const handleRemoveContact = id => dispatch(removeContact(id));

  const filteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  return (
    <ul className={styles.list}>
      {filteredContacts().map(({ id, name, number }) => {
        return (
          <li className={styles.item} key={id}>
            <span className={styles.name}>{name}:</span>&nbsp;
            <span className={styles['phone-number']}>{number}</span>
            <button
              className={styles.btn}
              onClick={() => handleRemoveContact(id)}
            ></button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
