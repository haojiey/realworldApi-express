const express = require('express');
const { body, validationResult } = require('express-validator');
const {User} = require('../model')

const router = express.Router();
const userCtrl = require('../controller/user')
// 用户登录
router.post('/users/login', userCtrl.login)

// 获取当前登录用户
router.get('/user', userCtrl.currentUser)

// 更新当前登录用户
router.put('/user', userCtrl.updateUser)

// 用户注册
router.post('/users', [
    //1.配置验证规则
    body('user.username').notEmpty().withMessage('用户名不能为空')
    .custom(async username => {
        const result = await User.findOne({username})
        if(result){
            return Promise.reject('用户名已存在')
        }
    }),
    body('user.password').notEmpty().withMessage('密码不能为空'),
    body('user.email').notEmpty().withMessage('邮箱不能为空')
    .isEmail().withMessage('邮箱格式不正确')
    // 如果上边验证未通过则不用继续往下执行
    .bail()
    .custom(async email => {
        const result = await User.findOne({email})
        if(result){
            return Promise.reject('邮箱已存在')
        }
    }),
],(req,res,next) => {
    //2.判断验证结果
    const errors = validationResult(req);

    if(!errors.isEmpty()){
       return res.status(400).json({
            error:errors.array()
        })
    }

    next()
},userCtrl.register)//3.验证结果通过，执行具体控制器处理

module.exports = router