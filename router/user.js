const express = require('express');
const userValidator = require('../validator/user')
const router = express.Router();
const userCtrl = require('../controller/user')
// 用户登录
router.post('/users/login', userCtrl.login)

// 获取当前登录用户
router.get('/user', userCtrl.currentUser)

// 更新当前登录用户
router.put('/user', userCtrl.updateUser)

// 用户注册
router.post('/users',userValidator.register,userCtrl.register)//3.验证结果通过，执行具体控制器处理

module.exports = router