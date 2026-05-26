console.log("Hello MIT42");

const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString =
  "mongodb+srv://khan:VZasEarecYfVqVHx@cluster0.cgcf8jr.mongodb.net/reja?retryWrites=true&w=majority";
mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("ERROR on connection MongoDb");
    else {
      console.log("MongoDB connected succesfully");
      module.exports = client;
      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, function () {
        console.log(
          `The server is running succesfully on port: ${PORT}, http://localhost:${PORT}`,
        );
      });
    }
  },
);
