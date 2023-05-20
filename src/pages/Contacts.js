import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contactsSlice/operations';
import { ContactList } from 'components/ContactsList/ContactsList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { selectFilter } from 'redux/filterSlice/selectors';
import { selectContacts, selectIsLoading } from 'redux/contactsSlice/selectors';
import { getFilteredContacts } from 'redux/selectors';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(selectContacts);

  const filteredContacts = useSelector(selectFilter);
  const visibleContacts = useSelector(getFilteredContacts);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactForm />
      {contacts.length > 0 ? (
        <>
          <Filter filter={filteredContacts} />
          <ContactList items={visibleContacts} />
        </>
      ) : (
        <p style={{ textAlign: 'center' }}>There are no contacts</p>
      )}
    </>
  );
};

export default Contacts;
