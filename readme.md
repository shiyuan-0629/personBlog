## 1. 项目介绍

这是一个基于 Vue3 + TypeScript + Vite + ElementPlus 实现的博客项目。

## 2. 项目技术栈
- Vue3
- TypeScript
- Vite
- ElementPlus
- VueRouter
- Axios
- Markdown
- NodeJs
- Express
- MySQL

## 3. 项目功能
- 文章分类查看
- 文章滚动加载
- 留言发布回复
- 数值变速增长
- 个人信息简介

## 4. 项目运行

1. 克隆项目
```bash
git clone https://github.com/wangyufeng1993/blog.git
```
2. 复制数据库
```bash
#在该项目根目录下登录本地MySQL客户端
#选择一个数据库
use <databaseName>;
#执行该项目的sql文件
source fcp_db.sql;
#注意还需修改文件 test/config/mysqlConfig.js
```
3. 前端部署
```bash
# 进入前端目录
cd client
# 安装依赖
pnpm install
# 运行项目
pnpm run dev
```
4. 后端部署
```bash
# 进入后端目录
cd test
# 安装依赖
pnpm install
# 运行项目
node index.js
```

## 5.项目截图
### 5.1 首页
![首页](./screenshots/index.png)
### 5.2 分类详情页
![分类详情页](./screenshots/category.png)
### 5.3 留言板
![留言板](./screenshots/message.png)
### 5.4 文章详情页
![文章详情页](./screenshots/detail.png)


