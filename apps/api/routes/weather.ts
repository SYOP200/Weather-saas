import { Router } from "express";
import { fetchForecast, fetchHistorical } from "../services/openMeteo";

const router = Router();

router.get("/forecast", async (req, res) => {
  res.json(await fetchForecast(req.query.lat, req.query.lon));
});

router.get("/historical", async (req, res) => {
  res.json(await fetchHistorical(req.query.lat, req.query.lon, req.query.start, req.query.end));
});

export default router;

