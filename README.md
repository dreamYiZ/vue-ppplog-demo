# vue-demo-123

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```



当然，以下是一个可能的 `README.md` 文件的内容，它包含了如何在 Vue 项目中使用 `ppplog` 的示例：

```markdown
# 在 Vue 项目中使用 ppplog

`ppplog` 是一个简单的日志库，它提供了一种方便的方式来控制你的日志输出。以下是如何在 Vue 项目中使用 `ppplog` 的步骤：

## 安装

首先，使用 npm 或 yarn 安装 `ppplog`：

```bash
npm install ppplog
# 或者
yarn add ppplog
```

## 使用

然后，在你的 Vue 项目中引入 `ppplog`：

```javascript
import ppplog from "ppplog"
```

你可以在你的 Vue 组件中使用 `ppplog` 函数来输出日志。例如，你可以在 `onMounted` 钩子中使用 `ppplog`：

```javascript
import { onMounted } from 'vue'

onMounted(()=>{
  ppplog(1,2,3)
})
```

## 控制日志输出

你可以使用 `disableppplog` 和 `enableppplog` 函数来禁用和启用日志输出：

```javascript
ppplog.disableppplog()  // 禁用日志输出
ppplog.enableppplog()  // 启用日志输出
```

## 控制时间显示

你可以使用 `enableTime` 和 `disableTime` 函数来控制是否在日志输出中显示当前时间：

```javascript
ppplog.enableTime()  // 启用时间显示
ppplog.disableTime()  // 禁用时间显示
```

这样，你就可以在你的 Vue 项目中使用 `ppplog` 来控制你的日志输出了。希望这个文档对你有所帮助！
```

这个 `README.md` 文件提供了关于如何在 Vue 项目中安装和使用 `ppplog` 的详细信息，包括如何控制日志输出和时间显示。希望这个答案对你有所帮助！