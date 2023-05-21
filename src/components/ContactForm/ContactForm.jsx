import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContact } from 'redux/contactsSlice/operations';
import { selectContacts } from 'redux/contactsSlice/selectors';
import css from '../Contacts.module.css';

const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch(); //посилання на функцію відправки action//

  function handleSubmit(evt) {
    evt.preventDefault();
    //const contact = {
    //id: nanoid(),
    //name: event.target.elements.name.value,
    //number: event.target.elements.number.value,
    const form = evt.target;
    const name = form.name.value;
    const number = form.number.value;

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return alert(`${name} is alredy in contacts.`);
    }

    //перевірка чи існує такий контакт вже//
    //const existingContact = contacts.find(
    //({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    //);

    //if (existingContact) {
    //return alert(`${contact.name}: is already in contacts`);
    //}

    //викликаємо генератор екшену та передаємо текст завдання для payload//
    console.log({ name, number });
    dispatch(addContact({ name, number }));
    form.reset(); //очищаємо форму//
  }

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.formLabel} htmlFor="">
        Name
        <input
          className={css.formInput}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          id={nanoid()}
          required
        />
      </label>
      <label className={css.formLabel} htmlFor="">
        Number
        <input
          className={css.formInput}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          id={nanoid()}
          required
        />
      </label>
      <button className={css.btnSubmit} type="submit">
        Add contact
      </button>
    </form>
  );
};
export default ContactForm;
