const express = require("express");
const AhaOriginals = require("../models/ahaOriginals.model");
const AhaCarousels = require("../models/ahaCarousels.model");
const AhaAction = require("../models/ahaAction.model");
const AhaHandPicked = require("../models/ahaHandPicked.model");
const AhaCrime = require("../models/ahaCrime.model");
const AhaDrama = require("../models/ahaDrama.model");
const AhaFreeMovies = require("../models/ahaFreeMovies.model");
const AhaMostWatched = require("../models/ahaMostWatched.model");
const AhaNewReleases = require("../models/ahaNewReleases.model");
const AhaNewlyAdded = require("../models/ahaNewlyAdded.model");
const AhaRomance = require("../models/ahaRomance.model");
const AhaThriller = require("../models/ahaThriller.model");
const AhaTop10 = require("../models/ahaTop10.model");
const AhaUpcoming = require("../models/ahaUpcoming.model");
const router = express.Router();

// Get --- Aha Originals
router.get("/originals", async (req, res) => {
  const ahaOriginals = await AhaOriginals.find().lean().exec();
  return res.status(200).send(ahaOriginals);
});

// GET id --- Aha Originals
router.get("/originals/:id", async (req, res) => {
  const ahaOriginals = await AhaOriginals.findById(req.params.id).lean().exec();
  return res.status(200).send(ahaOriginals);
});

// POST --- Aha Originals
router.post("/ahaOriginals", async (req, res) => {
  const ahaOriginals = await AhaOriginals.create(req.body);
  return res.status(200).send(ahaOriginals);
});

// Get --- Aha Carousel
router.get("/carousel", async (req, res) => {
  const ahaCarousel = await AhaCarousels.find().lean().exec();
  return res.status(200).send(ahaCarousel);
});

// Get id --- Aha Carousel
router.get("/carousel/:id", async (req, res) => {
  const ahaCarousel = await AhaCarousels.findById(req.params.id).lean().exec();
  return res.status(200).send(ahaCarousel);
});

// POST --- Aha Carousel
router.post("/carousel", async (req, res) => {
  const ahaCarousel = await AhaCarousels.create(req.body);
  return res.status(200).send(ahaCarousel);
});

// Get --- Aha Action Movies
router.get("/action", async (req, res) => {
  const action = await AhaAction.find().lean().exec();
  return res.status(200).send(action);
});

// Get id --- Aha Action Movies
router.get("/action/:id", async (req, res) => {
  const action = await AhaAction.findById(req.params.id).lean().exec();
  return res.status(200).send(action);
});

// POST --- Aha Action Movies
router.post("/action", async (req, res) => {
  const action = await AhaAction.create(req.body);
  return res.status(200).send(action);
});

// GET --- Aha HandPicked Movies
router.get("/handpicked", async (req, res) => {
  const handPicked = await AhaHandPicked.find().lean().exec();
  return res.status(200).send(handPicked);
});

// GET id --- Aha HandPicked Movies
router.get("/handpicked/:id", async (req, res) => {
  const handPicked = await AhaHandPicked.findById(req.params.id).lean().exec();
  return res.status(200).send(handPicked);
});

// POST --- Aha HandPicked Movies
router.post("/handpicked", async (req, res) => {
  const handPicked = await AhaHandPicked.create(req.body);
  return res.status(200).send(handPicked);
});

// GET --- Aha Crime Movies
router.get("/crime", async (req, res) => {
  const ahaCrime = await AhaCrime.find().lean().exec();
  return res.status(200).send(ahaCrime);
});

// GET id --- Aha Crime Movies
router.get("/crime/:id", async (req, res) => {
  const ahaCrime = await AhaCrime.findById(req.params.id).lean().exec();
  return res.status(200).send(ahaCrime);
});

// POST --- Aha Crime Movies
router.post("/crime", async (req, res) => {
  const ahaCrime = await AhaCrime.create(req.body);
  return res.status(200).send(ahaCrime);
});

// GET --- Aha Drama Movies
router.get("/drama", async (req, res) => {
  const ahaDrama = await AhaDrama.find().lean().exec();
  return res.status(200).send(ahaDrama);
});

// GET id --- Aha Drama Movies
router.get("/drama/:id", async (req, res) => {
  const ahaDrama = await AhaDrama.findById(req.params.id).lean().exec();
  return res.status(200).send(ahaDrama);
});

// POST --- Aha Drama Movies
router.post("/drama", async (req, res) => {
  const ahaDrama = await AhaDrama.create(req.body);
  return res.status(200).send(ahaDrama);
});

// GET --- Aha Free Movies
router.get("/free_movies", async (req, res) => {
  const ahaFreeMovies = await AhaFreeMovies.find().lean().exec();
  return res.status(200).send(ahaFreeMovies);
});

// GET --- Aha Free Movies
router.get("/free_movies/:id", async (req, res) => {
  const ahaFreeMovies = await AhaFreeMovies.findById(req.params.id)
    .lean()
    .exec();
  return res.status(200).send(ahaFreeMovies);
});

// POST --- Aha Free Movies
router.post("/free_movies", async (req, res) => {
  const ahaFreeMovies = await AhaFreeMovies.create(req.body);
  return res.status(200).send(ahaFreeMovies);
});

// GET --- Aha Most Watched
router.get("/most_watched", async (req, res) => {
  const ahaMostWatched = await AhaMostWatched.find().lean().exec();
  return res.status(200).send(ahaMostWatched);
});

// GET --- Aha Most Watched
router.get("/most_watched/:id", async (req, res) => {
  const ahaMostWatched = await AhaMostWatched.findById(req.params.id)
    .lean()
    .exec();
  return res.status(200).send(ahaMostWatched);
});

// POST --- Aha Most Watched
router.post("/most_watched", async (req, res) => {
  const ahaMostWatched = await AhaMostWatched.create(req.body);
  return res.status(200).send(ahaMostWatched);
});

// GET --- Aha New Releases
router.get("/new_release", async (req, res) => {
  const ahaNewReleases = await AhaNewReleases.find().lean().exec();
  return res.status(200).send(ahaNewReleases);
});

// GET --- Aha New Releases
router.get("/new_release/:id", async (req, res) => {
  const ahaNewReleases = await AhaNewReleases.findById(req.params.id)
    .lean()
    .exec();
  return res.status(200).send(ahaNewReleases);
});

// POST --- Aha New Releases
router.post("/new_release", async (req, res) => {
  const ahaNewReleases = await AhaNewReleases.create(req.body);
  return res.status(200).send(ahaNewReleases);
});

// GET --- Aha Newly Added
router.get("/newly_added", async (req, res) => {
  const ahaNewlyAdded = await AhaNewlyAdded.find().lean().exec();
  return res.status(200).send(ahaNewlyAdded);
});

// GET --- Aha Newly Added
router.get("/newly_added/:id", async (req, res) => {
  const ahaNewlyAdded = await AhaNewlyAdded.findById(req.params.id)
    .lean()
    .exec();
  return res.status(200).send(ahaNewlyAdded);
});

// POST --- Aha Newly Added
router.post("/newly_added", async (req, res) => {
  const ahaNewlyAdded = await AhaNewlyAdded.create(req.body);
  return res.status(200).send(ahaNewlyAdded);
});

// GET --- Aha Romance
router.get("/romance", async (req, res) => {
  const ahaRomance = await AhaRomance.find().lean().exec();
  return res.status(200).send(ahaRomance);
});

// GET --- Aha Romance
router.get("/romance/:id", async (req, res) => {
  const ahaRomance = await AhaRomance.findById(req.params.AhaHandPicked)
    .lean()
    .exec();
  return res.status(200).send(ahaRomance);
});

// POST --- Aha Romance
router.post("/romance", async (req, res) => {
  const ahaRomance = await AhaRomance.create(req.body);
  return res.status(200).send(ahaRomance);
});

// GET --- Aha Thriller
router.get("/thriller", async (req, res) => {
  const ahaThriller = await AhaThriller.find().lean().exec();
  return res.status(200).send(ahaThriller);
});

// GET --- Aha Thriller
router.get("/thriller/:id", async (req, res) => {
  const ahaThriller = await AhaThriller.findById(req.params.id).lean().exec();
  return res.status(200).send(ahaThriller);
});

// POST --- Aha Thriller
router.post("/thriller", async (req, res) => {
  const ahaThriller = await AhaThriller.create(req.body);
  return res.status(200).send(ahaThriller);
});

// GET --- Aha Top 10
router.get("/top10", async (req, res) => {
  const ahaTop10 = await AhaTop10.find().lean().exec();
  return res.status(200).send(ahaTop10);
});

// GET --- Aha Top 10
router.get("/top10/:id", async (req, res) => {
  const ahaTop10 = await AhaTop10.findById(req.params.id).lean().exec();
  return res.status(200).send(ahaTop10);
});

// POST --- Aha Top 10
router.post("/top10", async (req, res) => {
  const ahaTop10 = await AhaTop10.create(req.body);
  return res.status(200).send(ahaTop10);
});

// GET --- Aha Upcoming
router.get("/upcoming", async (req, res) => {
  const ahaUpcoming = await AhaUpcoming.find().lean().exec();
  return res.status(200).send(ahaUpcoming);
});

// GET --- Aha Upcoming
router.get("/upcoming/:id", async (req, res) => {
  const ahaUpcoming = await AhaUpcoming.findById(req.params.id).lean().exec();
  return res.status(200).send(ahaUpcoming);
});

// POST --- Aha Upcoming
router.post("/upcoming", async (req, res) => {
  const ahaUpcoming = await AhaUpcoming.create(req.body);
  return res.status(200).send(ahaUpcoming);
});

module.exports = router;
