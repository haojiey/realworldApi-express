const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth')
const articleCtrl = require('../controller/articles')
const articleValidator = require('../validator/articles')
// Create Article
router.post("/",auth, articleValidator.createArticle,articleCtrl.createArticle);

// Get Article
router.get("/:slug", articleValidator.getArticle, articleCtrl.getArticle);
// List Articles
router.get("/", articleCtrl.getArticleList);

// Update Article
router.put("/:slug",auth, articleValidator.updateArticle,articleCtrl.updateArticle );

// Delete Article
router.delete("/:slug", auth, articleValidator.deleteArticle,articleCtrl.deleteArticle);


// Feed Articles
router.get("/feed", async (req, res, next) => {
  try {
    // 处理请求
    res.send("get /articles/feed");
  } catch (err) {
    next(err);
  }
});





// Add Comments to an Article
router.post("/:slug/comments", async (req, res, next) => {
  try {
    // 处理请求
    res.send("post /articles/:slug/comments");
  } catch (err) {
    next(err);
  }
});

// Get Comments from an Article
router.get("/:slug/comments", async (req, res, next) => {
  try {
    // 处理请求
    res.send("get /articles/:slug/comments");
  } catch (err) {
    next(err);
  }
});

// Delete Comment
router.delete("/:slug/comments/:id", async (req, res, next) => {
  try {
    // 处理请求
    res.send("delete /articles/:slug/comments/:id");
  } catch (err) {
    next(err);
  }
});

// Favorite Article
router.post("/:slug/favorite", async (req, res, next) => {
  try {
    // 处理请求
    res.send("post /articles/:slug/favorite");
  } catch (err) {
    next(err);
  }
});

// Unfavorite Article
router.delete("/:slug/favorite", async (req, res, next) => {
  try {
    // 处理请求
    res.send("delete /articles/:slug/favorite");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
