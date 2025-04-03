

# popular-template - 

```markdown:README.md
# popular-template



## 技术栈

- **框架**: [Next.js 15](https://nextjs.org/) - React 框架，支持服务端渲染和静态生成
- **样式**: [Tailwind CSS 4](https://tailwindcss.com/) - 实用优先的 CSS 框架
- **UI 组件**:
  - [Radix UI](https://www.radix-ui.com/) - 无样式、可访问的 UI 组件
  - [Lucide React](https://lucide.dev/) - 美观的开源图标集
- **工具库**:
  - [class-variance-authority](https://cva.style/docs) - 用于创建类型安全的 UI 组件变体
  - [clsx](https://github.com/lukeed/clsx) - 用于有条件地构建 className 字符串
  - [tailwind-merge](https://github.com/dcastil/tailwind-merge) - 合并 Tailwind CSS 类而不会产生冲突

## 主要功能

- **URL 转代码** - 输入网站 URL，获取对应的代码
- **截图转代码** - 上传网站截图，生成匹配的代码
- **Figma 转代码** - 从 Figma 设计直接转换为可用代码

## 快速开始

### 前提条件

- Node.js 18.0 或更高版本
- npm 或 yarn 或 pnpm

### 安装

```bash
# 克隆仓库
git clone https://github.com/yourusername/copyweb.git
cd copyweb

# 安装依赖
npm install
# 或
yarn install
# 或
pnpm install
```

### 开发

```bash
# 启动开发服务器（使用 Turbopack）
npm run dev
# 或
yarn dev
# 或
pnpm dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看您的应用。

### 构建

```bash
# 构建生产版本
npm run build
# 或
yarn build
# 或
pnpm build

# 启动生产服务器
npm run start
# 或
yarn start
# 或
pnpm start
```

## 项目结构

```
copyweb/
├── app/                  # Next.js 应用路由
├── components/           # 可复用组件
│   ├── ui/               # UI 组件库
│   └── ...               # 其他组件
├── public/               # 静态资源
└── ...
```

## 贡献

欢迎贡献！请随时提交 Pull Request 或创建 Issue。

## 许可证

本项目采用 [MIT 许可证](LICENSE)。

## 致谢

- 使用 [ShipAny](https://shipany.io) 构建
```

这个 README.md 文件包含了项目的基本介绍、技术栈详情、主要功能、安装和使用说明、项目结构以及贡献指南。根据您提供的信息，我特别强调了 Next.js、Tailwind CSS、Radix UI 和 Lucide 等技术栈。
