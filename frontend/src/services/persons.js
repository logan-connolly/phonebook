import axios from "axios";

const endpoint = "/api/persons";

const getAll = () => axios.get(endpoint).then((resp) => resp.data);

const create = (person) =>
  axios.post(endpoint, person).then((resp) => resp.data);

const update = (id, person) =>
  axios.put(`${endpoint}/${id}`, person).then((resp) => resp.data);

const remove = (id) =>
  axios.delete(`${endpoint}/${id}`).then((resp) => resp.data);

const personsAPI = { getAll, create, update, remove };

export default personsAPI;
