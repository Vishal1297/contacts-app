import { useEffect, useState } from "react";
import { uuid } from "uuidv4";
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
    setContacts([...contacts, {id: uuid(), ...contacts}]);
  }

  const removeContactHandler = (id: string) => {
    const newContacts: Contact[] = contacts.filter((contact) => {
      return contact.id !== id;
    })

    setContacts(newContacts);
  }

  useEffect(() => {
    const contactsStr = localStorage.getItem(CONTACTS_KEY);
    const fetchedContacts: Contact[] = contactsStr ? JSON.parse(contactsStr) : [];
    if (fetchedContacts.length > 0) {
      setContacts(fetchedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts));
  }, [contacts])

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} />
    </div>
  );
}

export default App;
