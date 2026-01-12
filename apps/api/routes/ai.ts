import { summarize } from "../services/aiSummary";

router.post("/summary", async (req, res) => {
  res.json({ summary: await summarize(req.body) });
});

