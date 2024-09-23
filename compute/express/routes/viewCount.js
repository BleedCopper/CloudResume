import express from "express";
import ViewCount from "../models/ViewCount.js";

const router = express.Router();

router.get("/viewCount", async (req, res) => {
  try {
    let viewCount = await ViewCount.findOne();
    if (!viewCount) {
      viewCount = new ViewCount();
      await viewCount.save();
    }
    res.json({ count: viewCount.count });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/viewCount", async (req, res) => {
  try {
    let viewCount = await ViewCount.findOne();
    if (!viewCount) {
      viewCount = new ViewCount();
    }
    viewCount.count += 1;
    await viewCount.save();
    res.json({ count: viewCount.count });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
