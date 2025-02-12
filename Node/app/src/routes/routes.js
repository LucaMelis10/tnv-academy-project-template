import express from "express";

const API_ROOT = '/api';

import { createRating, updateRating, deleteRating, getMovies, getRatingsByUserId, getAllRatings } from "../controllers/ratings-controller.js";

const router = express.Router();

router.get(`${API_ROOT}/rating/:userId/`, getMovies);
router.post(`${API_ROOT}/rating`, createRating);
router.patch(`${API_ROOT}/rating/:id`, updateRating);
router.delete(`${API_ROOT}/rating/:id`, deleteRating);
router.get(`${API_ROOT}/ratings/userid/:userId`, getRatingsByUserId);
router.get(`${API_ROOT}/ratings`, getAllRatings);

// router.post(`${API_ROOT}/rating/add`, addToMyMovies);

export default router;
