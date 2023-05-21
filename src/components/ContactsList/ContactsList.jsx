//import { ContactItem } from 'components/ContactsItem/ContactsItem';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice/operations';
import { selectContacts } from 'redux/contactsSlice/selectors';
import { selectFilter } from 'redux/filterSlice/selectors';
import css from '../Contacts.module.css';

/**const ContactList = ({ items }) => {
  return (
    <ul>
      {items.map(({ id, name, number }) => (
        <li key={id}>
          <ContactItem key={id} id={id} name={name} number={number} />
        </li>
      ))}
    </ul>
  );
};
export default ContactList**/
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

  return (
    <ul>
      {visibilityContacts.map(contact => (
        //<ContactItem key={contact.id}></ContactItem>
        //<ContactItem key={id} id={id} name={name} number={number} />
        <li className={css.contactItem} key={contact.id}>
          <p>
            {contact.name}: {contact.number}
          </p>
          <button className={css.button} type="button" onClick={handleDelete}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
