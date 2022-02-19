const express = require('express');

const router = express.Router();
const userCtrl = require('../controller/user')
// 用户登录
router.post('/users/login', userCtrl.login)

// 获取当前登录用户
router.get('/user', userCtrl.currentUser)

// 更新当前登录用户
router.put('/user', userCtrl.updateUser)

// 用户注册
router.post('/users', userCtrl.register)

module.exports = router