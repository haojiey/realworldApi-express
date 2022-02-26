const { body } = require("express-validator");
const validator = require("../middleware/validate");
const { Article } = require('../model')

exports.createArticle = validator([
    body('article.title').notEmpty().withMessage('title不能为空'),
    body('article.description').notEmpty().withMessage('description不能为空'),
    body('article.body').notEmpty().withMessage('body不能为空'),
])

exports.getArticle = validator([
    // param('slug').custom(async value => {
    //     if(!mongoose.isValidObjectId(value)){
    //         return  Promise.reject('id类型错误')
    //     }
    // })
    validator.isValidObjectId(['params'],'slug')
])
exports.updateArticle = [
    validator([
        validator.isValidObjectId(['params'],'slug')
    ]),
    async (req, res, next) => {
       const article =  await Article.findById(req.params.slug)
       req.article = article
       if(!article){
           return res.status(404).end()
       }
       next()
    },
    async (req, res, next) => {
        if(req.user._id.toString() !== req.article.author.toString()){
            return res.status(403).end()
        }
        next()
     }
]

exports.deleteArticle = exports.updateArticle