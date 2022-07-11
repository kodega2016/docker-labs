const express = require("express");
const redis = require("redis");

const client = redis.createClient({
  socket: {
    host: "redis-server",
    port: 6379,
  },
});

(async () => {
  await client.connect();
})();

const app = express();

const VISITS = "visits";
client.set(VISITS, 0);

app.get("/crash", (req, res) => {
  process.exit(1);
});

app.get("/", async (req, res) => {
  const visits = await client.get(VISITS);
  client.set(VISITS, parseInt(visits) + 1);

  res.status(200).json({
    success: true,
    data: visits,
    msg: "Visits fetched successfully.",
  });
});

app.listen(8080, () => {
  console.log("Listening on port:8080");
});
