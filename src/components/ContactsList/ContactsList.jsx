//import { ContactItem } from 'components/ContactsItem/ContactsItem';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice/operations';
import { selectContacts } from 'redux/contactsSlice/selectors';
import { selectFilter } from 'redux/filterSlice/selectors';
import css from '../Contacts.module.css';

export function ContactList() {
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectFilter).toLowerCase();

  const dispatch = useDispatch();

  const handleDelete = evt => {
    dispatch(deleteContact(evt.currentTarget.id));
  };

  const getVisibilityContacts = () => {
    if (!filterValue || filterValue === '') {
      return contacts;
    }

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue)
    );
  };

  const visibilityContacts = getVisibilityContacts();
  //console.log({ contacts });
  return (
    <ul>
      {visibilityContacts.map(contact => (
        <li className={css.contactItem} key={contact.id} id={contact.id}>
          <p className={css.textList}>
            {contact.name}: {contact.number}
          </p>
          <button
            className={css.btnSubmit}
            id={contact.id}
            type="button"
            onClick={handleDelete}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
