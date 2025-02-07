// api/json.js
import jsonServer from "json-server";
import path from "path";

// Build the absolute path to the data.json file in a cross-platform way
const dbFile = path.join(process.cwd(), "src", "data", "data.json");

// Create the json-server router using the data.json file
const router = jsonServer.router(dbFile);

// Use default middlewares (logger, static, CORS, etc.)
const middlewares = jsonServer.defaults();

export default (req, res) => {
  // Create a new instance of json-server per request
  const server = jsonServer.create();

  // Apply default middlewares
  server.use(middlewares);

  // Mount the router to handle all CRUD endpoints
  server.use(router);

  // Let json-server handle the incoming request and response
  server(req, res);
};
