const ContactFilter = ({ search, setSearch }) => {
  const searchInputHandler = (event) => setSearch(event.target.value);

  return (
    <div>
      filter shown with <input value={search} onChange={searchInputHandler} />
    </div>
  );
};

export default ContactFilter;
