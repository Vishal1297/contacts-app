import Contact from "../models/Contact";
import ContactCard from "./ContactCard";

const ContactList = (props: { contacts: Contact[]; getContactId: any}) => {
  const renderContactList = props.contacts.map((contact: Contact) => {
    return <ContactCard contact={contact} />;
  });

  return <div className="ui celled list">{renderContactList}</div>;
};

export default ContactList;
