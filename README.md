# 晋中釜源节能科技-官网

### 链接地址：http://www.jzfyjnkj.com/

### 开发说明：
- 开发环境
```js
npm run dev
```
- 生产环境
```js
// 项目打包
npm run build

// 项目运行
npm run start
```

### 部署启动：
```js
pm2 start --name 'myName' npm -- run start
```

### 运用技术：
- next
- SSG 数据静态化
- TypeScript

### 项目目录：
```js
site
├─ .git
├─ .gitignore
├─ next-env.d.ts
├─ next.config.js
├─ package-lock.json
├─ package.json
├─ public  // 静态资源
├─ README.md
├─ src
│  ├─ axios  // 数据请求
│  ├─ baiduHM.ts  // 百度弹窗广告
│  ├─ Components  // 组件
│  ├─ font  // 图标库
│  ├─ pages  // 路由页面
│  ├─ scss  // 公共 Scss
│  ├─ typings.d.ts
│  └─ util  // 工具库
└─ tsconfig.json

```