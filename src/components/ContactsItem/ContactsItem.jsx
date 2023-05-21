//import { useDispatch } from 'react-redux';
//import PropTypes from 'prop-types';
//import css from '../Contacts.module.css';
//import { deleteContact } from 'redux/contactsSlice/operations';

//export const ContactItem = ({ id, name, number }) => {
//const dispatch = useDispatch();
//const handleDelete = () => {
//dispatch(deleteContact(id));
//};

//return (
// <>
//<li className={css.contactItem} key={id}>
//<p>
//{name}: {number}
//</p>
//<button className={css.button} type="button" onClick={handleDelete}>
//Delete
//</button>
//</li>
//</>
//);
//};

//ContactItem.propTypes = {
//contacts: PropTypes.arrayOf(
//PropTypes.shape({
//id: PropTypes.string.isRequired,
//name: PropTypes.string.isRequired,
//number: PropTypes.string.isRequired,
//}).isRequired
//),
//};
