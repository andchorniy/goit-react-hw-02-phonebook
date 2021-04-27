
import PropTypes from 'prop-types';
import style from './ContactList.module.css'

import Contact from '../Contact'
const ContactList = ({contacts, deleteHandler}) => {
    return (
        
            <ul className={style.list}>
            {contacts.map((contact)=>{
                return <li className={style.item} key={contact.id}>
                    <Contact name={contact.name} number={contact.number} id={contact.id} deleteHandler={deleteHandler}/>
                    </li>
            })}

            </ul>
        
    );
};
ContactList.propTypes={
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    })).isRequired,
    deleteHandler: PropTypes.func.isRequired,
}
export default ContactList;