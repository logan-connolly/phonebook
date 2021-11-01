import React, { useState, useEffect } from "react";
import personApi from "./services/persons";
import ContactFilter from "./components/ContactFilter";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    personApi.getAll().then((initialPersons) => setPersons(initialPersons));
  }, []);

  const showNotification = (message, isError) => {
    setMessage(message);
    setError(isError);
    setTimeout(() => {
      setMessage(null);
    }, 5000);
  };

  return (
    <>
      <h1>Phonebook</h1>
      <Notification message={message} error={error} />
      <ContactFilter search={search} setSearch={setSearch} />
      <ContactForm
        persons={persons}
        setPersons={setPersons}
        showNotification={showNotification}
      />
      <ContactList
        persons={persons}
        search={search}
        setPersons={setPersons}
        showNotification={showNotification}
      />
    </>
  );
};

export default App;
