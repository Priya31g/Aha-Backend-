const express = require("express");
const cors = require("cors");
const connect = require("./config/db");

const ahaOriginals = require("./controllers/aha.controller");
const ahaCarousels = require("./controllers/aha.controller");
const ahaAction = require("./controllers/aha.controller");
const ahaHandPicked = require("./controllers/aha.controller");
const ahaCrime = require("./controllers/aha.controller");
const ahaDrama = require("./controllers/aha.controller");
const ahaFreeMovies = require("./controllers/aha.controller");
const ahaMostWatched = require("./controllers/aha.controller");
const ahaNewReleases = require("./controllers/aha.controller");
const ahaNewlyAdded = require("./controllers/aha.controller");
const ahaRomance = require("./controllers/aha.controller");
const ahaThriller = require("./controllers/aha.controller");
const ahaTop10 = require("./controllers/aha.controller");
const ahaUpcoming = require("./controllers/aha.controller");

const signup = require("./controllers/auth.controller");
const signin = require("./controllers/auth.controller");

const app = express();
app.use(express.json());
app.use(cors());
app.options("*", cors());

app.use("/aha", ahaOriginals);
app.use("/aha", ahaCarousels);
app.use("/aha", ahaAction);
app.use("/aha", ahaHandPicked);
app.use("/aha", ahaCrime);
app.use("/aha", ahaDrama);
app.use("/aha", ahaFreeMovies);
app.use("/aha", ahaMostWatched);
app.use("/aha", ahaNewReleases);
app.use("/aha", ahaNewlyAdded);
app.use("/aha", ahaRomance);
app.use("/aha", ahaThriller);
app.use("/aha", ahaTop10);
app.use("/aha", ahaUpcoming);

app.use("/", signup);
app.use("/", signin);

const start = async () => {
  await connect();
var PORT = process.env.PORT|| 2233;
  app.listen(PORT, () => {
    console.log("Listening on port 2233");
  });
};

module.exports = start;
