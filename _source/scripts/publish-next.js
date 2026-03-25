#!/usr/bin/env node
/**
 * publish-next.js (baw-notes)
 * 从 articles-queue 取下一篇疗愈文章，注入 React+TS 源码，准备构建。
 */

const fs = require('fs')
const path = require('path')

const ROOT = path.resolve(__dirname, '..')
const QUEUE_FILE = path.join(ROOT, 'articles-queue', 'queue.json')
const SRC_COMPONENTS = path.join(ROOT, 'src')
const QUEUE_DIR = path.join(ROOT, 'articles-queue')

// 1. 读取队列
const queue = JSON.parse(fs.readFileSync(QUEUE_FILE, 'utf8'))

if (queue.queue.length === 0) {
  console.log('⚠️  队列为空，没有待发布的文章。')
  process.exit(0)
}

// 2. 取出下一篇
const next = queue.queue.shift()
console.log(`📝 准备发布: [${next.num}] ${next.title}`)

// 3. 复制文章组件到 src/
const srcFile = path.join(QUEUE_DIR, next.file)
const componentName = path.basename(next.file, '.tsx')
const destFile = path.join(SRC_COMPONENTS, `components/${componentName}.tsx`)

if (!fs.existsSync(srcFile)) {
  console.error(`❌ 找不到文章文件: ${srcFile}`)
  process.exit(1)
}

// 确保 components 目录存在
const componentsDir = path.join(SRC_COMPONENTS, 'components')
if (!fs.existsSync(componentsDir)) {
  fs.mkdirSync(componentsDir, { recursive: true })
}

fs.copyFileSync(srcFile, destFile)
console.log(`✅ 已复制: ${next.file} → src/components/${componentName}.tsx`)

// 4. 更新 Home.tsx —— 添加新文章到 articles 数组
const homePath = path.join(SRC_COMPONENTS, 'components/Home.tsx')
let homeContent = fs.readFileSync(homePath, 'utf8')

const today = new Date().toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })
const articleEntry = `  {
    id: '${next.routeId}' as View,
    num: '${next.num}',
    title: '${next.title.replace(/'/g, "\\'")}',
    subtitle: '${next.subtitle.replace(/'/g, "\\'")}',
    date: '${today}',
    readTime: '${next.readTime}',
    tags: ${JSON.stringify(next.tags)},
    emoji: '${next.emoji}',
    accentColor: '${next.accentColor}',
  },`

// 在 articles 数组关闭括号前插入
homeContent = homeContent.replace(
  /(\s*\}\s*,?\s*\]\s*\ninterface Props)/,
  `\n${articleEntry}\n]\n\ninterface Props`
)

fs.writeFileSync(homePath, homeContent, 'utf8')
console.log(`✅ 已更新 Home.tsx`)

// 5. 更新 App.tsx —— 添加 import 和路由
const appPath = path.join(SRC_COMPONENTS, 'App.tsx')
let appContent = fs.readFileSync(appPath, 'utf8')

const importLine = `import ${componentName} from './components/${componentName}'`
const routeLine = `      {view === '${next.routeId}' && <${componentName} onBack={() => setView('home')} onShare={handleShare} />}`

if (!appContent.includes(importLine)) {
  // 插入到最后一个 import 后
  const lastImportIdx = appContent.lastIndexOf("import ")
  const lineEndIdx = appContent.indexOf('\n', lastImportIdx)
  appContent = appContent.slice(0, lineEndIdx + 1) + importLine + '\n' + appContent.slice(lineEndIdx + 1)
}

if (!appContent.includes(routeLine)) {
  // 插入在 home view 渲染前
  appContent = appContent.replace(
    /(\{view === 'home' && <Home)/,
    `${routeLine}\n      $1`
  )
}

fs.writeFileSync(appPath, appContent, 'utf8')
console.log(`✅ 已更新 App.tsx`)

// 6. 更新 types.ts —— 添加新的 View 类型
const typesPath = path.join(SRC_COMPONENTS, 'types.ts')
if (fs.existsSync(typesPath)) {
  let typesContent = fs.readFileSync(typesPath, 'utf8')
  if (!typesContent.includes(`'${next.routeId}'`)) {
    typesContent = typesContent.replace(
      /(export type View = [^;]+)(;)/,
      `$1 | '${next.routeId}'$2`
    )
    fs.writeFileSync(typesPath, typesContent, 'utf8')
    console.log(`✅ 已更新 types.ts`)
  }
}

// 7. 更新 queue.json
queue.published.push({ ...next, publishedAt: new Date().toISOString() })
fs.writeFileSync(QUEUE_FILE, JSON.stringify(queue, null, 2), 'utf8')
console.log(`✅ 已更新 queue.json（队列剩余：${queue.queue.length} 篇）`)

console.log('\n🎉 完成！现在运行 npm run build 构建发布。')
