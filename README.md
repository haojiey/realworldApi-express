### mongodb

#### 安装

下载地址：https://www.mongodb.com/download-center#community获取到最新下载链接

- 进入 /usr/local
- 下载
  sudo curl -O https://fastdl.mongodb.org/osx/mongodb-osx-ssl-x86_64-4.0.9.tgz

- 解压
  sudo tar -zxvf mongodb-osx-ssl-x86_64-4.0.9.tgz

- 重命名为 mongodb 目录

sudo mv mongodb-osx-x86_64-4.0.9/ mongodb

#### 配置环境变量

 - 1、在终端中输出 "open -e .bash_profile"，打开bash_profile文件。
 - 2、将安装目录的bin目录地址 "export PATH=/usr/local/mongodb/bin:$PATH" 添加到环境变量中。
 - 3、Command+S保存配置，关闭上面的.bash_profile编辑窗口。
 - 4、在终端中输入"source .bash_profile"使配置立即生效。
 - 5、在终端中输入 "mongod -version"，如果出现如下信息则说明path配资环和安装都已成功

#### 创建日志及数据存放的目录

数据存放路径：

> sudo mkdir -p /usr/local/mongodb/data

日志文件路径：

> sudo mkdir -p /usr/local/mongodb/log

接下来要确保当前用户对以上两个目录有读写的权限：

> sudo chown runoob /usr/local/var/mongodb

> sudo chown runoob /usr/local/var/log/mongodb

以上 runoob 是我电脑上对用户，你这边需要根据你当前对用户名来修改。

#### 启动服务

`在终端中，先进入data和log所在的目录，也就是/usr/local/mongoDB ，然后输入"mongod --dbpath data --logpath log/mongod.log --logappend"，启动mongodb服务(当前终端不要关闭)`

*注意：因为默认的数据保存地址为/data/db，需要手动在mac根目录(即Macintosh HD)中创建/data/db，如果改变data目录位置，则需要在启动服务时 指定dbpath的位置。*

- --dbpath 指定为刚才创建好的data目录
- --logpath 指定log存放位置
- --logappend mongo在后台运行
- --fork 在后台运行

#### 查看 mongod 服务是否启动：

> ps aux | grep -v grep | grep mongod

### 自己本地操作

`启动`

 > mongod --dbpath /usr/local/mongodb/data --logpath /usr/local/mongodb/log/mongo.log --logappend

 `关闭`
 > 关闭终端/ctrl+c
###

.
|-- config # 配置文件
|-- config.default.js
|-- controller # 用于解析用户的输入，处理后返回相应的结果
|-- model # 数据持久层
|-- middleware # 用于编写中间件
|-- router # 用于哦欸之 URL 路由规则
|-- util # 工具模块
|-- app.js # 用于自定义启动时的初始化工作
