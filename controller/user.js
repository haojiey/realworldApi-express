const { User } = require("../model");
const jwt = require("../util/jwt");
const { jwtSecret } = require("../config/config.deault");
// 用户登录
exports.login = async (req, res, next) => {
  try {
    let user = req.user.toJSON();

    const token = await jwt.sign(
      {
        userId: user._id,
      },
      jwtSecret
    );

    delete user.password;

    res.status(201).json({ ...user,token });
  } catch (error) {
    next(error);
  }
};
// 注册用户
exports.register = async (req, res, next) => {
  try {
    let user = new User(req.body.user);
    // 2.数据验证
    // 2.1基本数据验证
    // 2.2业务数据验证
    // 3.验证成功保存到数据库
    await user.save();

    user = user.toJSON();

    delete user.password;
    // 4.发送成功相应
    res.status(201).json(user);

    // 处理请求
  } catch (error) {
    next(error);
  }
};
// 获取当前用户信息
exports.currentUser = async (req, res, next) => {
  try {
    // 处理请求
    res.status(200).json({
      user:req.user
    })
  } catch (error) {
    next(error);
  }
};
// 修改当前用户信息
exports.updateUser = async (req, res, next) => {
  try {
    // 处理请求
    res.send("put user");
  } catch (error) {
    next(error);
  }
};
