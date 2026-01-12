router.get("/", (req, res) => {
  res.json(["pollen", "airQuality"]);
});

