import	style from './Contact.module.css'
const Contact = ({name, number, id, deleteHandler}) => {
    return (
        <>
            {name} {number}
            <button className={style.btn} onClick={deleteHandler} id={id}>Delete</button>
        </>
    );
};

export default Contact;