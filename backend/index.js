const path = require("path");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const persons = require("./persons");
const middleware = require("./middleware");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "../frontend/build")));
app.use(morgan(middleware.payloadLogger));

// Persons resource
app.get("/api/persons", persons.get_all);
app.get("/api/persons/:id", persons.get);
app.delete("/api/persons/:id", persons.remove);
app.post("/api/persons", persons.add);

// Serve frontend
app.get("*", (request, response) => {
  response.sendFile(path.resolve(__dirname, "../frontend/build", "index.html"));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
