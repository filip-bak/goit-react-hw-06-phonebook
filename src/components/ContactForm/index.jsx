import { useState } from 'react';
import styles from './ContactForm.module.css';

import { getContacts } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/actions';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    for (const contact of contacts) {
      if (contact.name === name) {
        return alert(`${name} is already in contacts.`);
      }
    }

    dispatch(addContact(name, number));

    setName('');
    setNumber('');
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          Name
          <input
            className={styles.input}
            type="text"
            name="name"
            pattern="[A-Z][a-z]+(([\`\s][A-Z][a-z]+)?){5}"
            title="Name may contain only letters, spaces. For example Adrian, Jacob Mercer, Charles De Batz De Castelmore"
            autoComplete="off"
            placeholder="Name"
            required
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <span className={styles.status}></span>
        </label>
        <label className={styles.label}>
          Number
          <input
            className={styles.input}
            type="tel"
            name="number"
            pattern="(\+[0-9]{2}\s)?[0-9]{3}[\s\-]?[0-9]{3}[\s\-]?[0-9]{3}"
            title="Phone number must be digits and can contain spaces, dashes and can start with +"
            autoComplete="off"
            placeholder="Number"
            required
            value={number}
            onChange={e => setNumber(e.target.value)}
          />
          <span className={styles.status}></span>
        </label>
        <button className={styles.btn} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
