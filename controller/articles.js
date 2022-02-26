const { Article, User } = require("../model");
// 删除文章
exports.deleteArticle = async (req, res, next) => {
  try {
     const article = req.article; 
     await article.remove()
    // 处理请求
    res.status(204).end()
  } catch (err) {
    next(err);
  }
};

// 更新文章
exports.updateArticle = async (req, res, next) => {
  try {
    const article = req.article;
    console.log(article);
    const bodyArticle = req.body.article;
    article.title = bodyArticle.title || article.title;
    article.description = bodyArticle.description || article.description;
    article.body = bodyArticle.body || article.body;
    await article.save();
    res.status(200).json({
      article,
    });
  } catch (err) {
    next(err);
  }
};

// 创建文章
exports.createArticle = async (req, res, next) => {
  try {
    const article = new Article(req.body.article);
    article.author = req.user._id;
    article.populate("author");
    await article.save();
    // 处理请求
    res.status(201).json({ article });
  } catch (err) {
    next(err);
  }
};

// 获取文章
exports.getArticle = async (req, res, next) => {
  try {
    // 处理请求
    const id = req.params.slug;
    const article = await Article.findById(id).populate("author");
    if (!article) {
      return res.status(404).end();
    }
    res.status(200).json({ article });
  } catch (err) {
    next(err);
  }
};

// 获取文章列表
exports.getArticleList = async (req, res, next) => {
  try {
    const { limit = 10, offset = 0, tag, author } = req.query;

    const filter = {};
    if (tag) {
      filter.tagList = tag;
    }
    if (author) {
      const user = await User.findOne({ username: author });
      filter.author = user ? user._id : null;
    }

    const articles = await Article.find(filter)
      .skip(Number.parseInt(offset))
      .limit(Number.parseInt(limit))
      .sort({
        chartAt: -1,
      });

    const articlesCount = await Article.countDocuments(filter);
    // 处理请求
    res.status(200).json({
      articles,
      articlesCount,
    });
  } catch (err) {
    next(err);
  }
};
