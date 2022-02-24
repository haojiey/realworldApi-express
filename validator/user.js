const { body } = require("express-validator");
const { User } = require("../model");
const validator = require("../middleware/validate");

exports.register = validator([
  //1.配置验证规则
  body("user.username")
    .notEmpty()
    .withMessage("用户名不能为空")
    .custom(async (username) => {
      const result = await User.findOne({ username });
      if (result) {
        return Promise.reject("用户名已存在");
      }
    }),
  body("user.password").notEmpty().withMessage("密码不能为空"),
  body("user.email")
    .notEmpty()
    .withMessage("邮箱不能为空")
    .isEmail()
    .withMessage("邮箱格式不正确")
    // 如果上边验证未通过则不用继续往下执行
    .bail()
    .custom(async (email) => {
      const result = await User.findOne({ email });
      if (result) {
        return Promise.reject("邮箱已存在");
      }
    }),
]);
