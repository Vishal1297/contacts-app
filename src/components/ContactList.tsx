import Contact from "../models/Contact";
import ContactCard from "./ContactCard";

const ContactList = (props: { contacts: Contact[]; getContactId: any }) => {

  const deleteContactHandler = (id: any) => {
    console.log("id :: ", id);
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map((contact: Contact) => {
    return <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id} />;
  });

  return <div className="ui celled list">{renderContactList}</div>;
};

export default ContactList;
