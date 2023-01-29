import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import "./App.css";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import Header from "./components/Header";
import Contact from "./models/Contact";

function App() {
  const CONTACTS_KEY = "contacts";

  const [contacts, setContacts] = useState<any[]>([]);

  const addContactHandler = (contact: Contact) => {
    console.log("addContactHandler contact ::", contact);
    contact.id = uuid();
    setContacts([...contacts, contact]);
  };

  const removeContactHandler = (id: any) => {
    const newContacts: Contact[] = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContacts);
  };

  useEffect(() => {
    const contactsStr = localStorage.getItem(CONTACTS_KEY);
    const fetchedContacts: Contact[] = contactsStr
      ? JSON.parse(contactsStr)
      : [];
    if (fetchedContacts.length > 0) {
      setContacts(fetchedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} />
    </div>
  );
}

export default App;
