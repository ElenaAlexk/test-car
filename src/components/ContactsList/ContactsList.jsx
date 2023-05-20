import { ContactItem } from 'components/ContactsItem/ContactsItem';

export const ContactList = ({ items }) => {
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
