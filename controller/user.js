// 用户登录
exports.login =  async (req,res,next) => {
    try {
        // 处理请求
        res.send('hello world')
    } catch (error) {
        next(error)
    }
}
// 注册用户
exports.register = async (req,res,next) => {
    try {
        // 处理请求
        res.send('hello world')
    } catch (error) {
        next(error)
    }
}
// 获取当前用户信息
exports.currentUser = async (req,res,next) => {
    try {
        // 处理请求
        res.send('get user')
    } catch (error) {
        next(error)
    }
}
// 修改当前用户信息
exports.updateUser = async (req,res,next) => {
    try {
        // 处理请求
        res.send('put user')
    } catch (error) {
        next(error)
    }
}

