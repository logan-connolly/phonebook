const data = require("./data");
let persons = data.persons;

exports.getAll = (request, response) => {
  response.json(persons);
};

exports.get = (request, response) => {
  const id = request.params.id;
  const person = persons.find((p) => p.id === +id);
  if (person) {
    response.json(person);
  } else {
    response.status(404).end();
  }
};

exports.remove = (request, response) => {
  const id = request.params.id;
  persons = persons.filter((p) => p.id !== +id);
  response.status(204).end();
};

const generateId = () => {
  const highestPossibleId = 1000000;
  return Math.floor(Math.random() * highestPossibleId);
};

exports.add = (request, response) => {
  const body = request.body;

  if (!body.name || !body.number) {
    return response.status(400).json({ error: "Missing name and/or number" });
  }

  const personFound = persons.find((p) => p.name === body.name);
  if (personFound) {
    return response.status(400).json({ error: `'${personFound.name}' exists` });
  }

  const person = {
    name: body.name,
    number: body.number,
    id: generateId(),
  };

  persons = persons.concat(person);
  response.status(201).json(person);
};
