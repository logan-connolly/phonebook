import personApi from "../services/persons";

const ContactList = ({ persons, search, setPersons, showNotification }) => {
  const contactsToShow = persons.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const onDelete = (id) => {
    const personToDelete = persons.find((p) => p.id === id);
    const confirmed = window.confirm(`Delete ${personToDelete.name} ?`);

    if (confirmed) {
      personApi
        .remove(id)
        .then(() => {
          showNotification(`${personToDelete.name} was removed`, true);
        })
        .catch(() => {
          const errMessage = `Information for ${personToDelete.name} has already been removed from server`;
          showNotification(errMessage, true);
        })
        .finally(() => {
          setPersons(persons.filter((person) => person.id !== id));
        });
    }
  };

  return (
    <div>
      <h2>Numbers</h2>
      {contactsToShow.map((person) => (
        <li key={person.id}>
          {person.name} {person.number + " "}
          <button onClick={() => onDelete(person.id)}>delete</button>
        </li>
      ))}
    </div>
  );
};

export default ContactList;
