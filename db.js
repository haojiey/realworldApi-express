const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/test");

mongoose.connection.once("open", () => {
  console.log("数据库连接成功！");
});
// 绑定数据库连接失败事件
mongoose.connection.once("close", () => {
  console.log("数据库已断开");
});
