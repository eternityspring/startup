---
title: 笔记
description: 记录开发过程中的奇思妙想
---

## 开发 idea

参考块：https://tailark.com/hero-section

npx shadcn-vue@latest add button

你看到的这种在前缀中使用冒号的写法，遵循的是 **Conventional Commits（约定式提交）** 规范。

它是目前前端和开源社区（如 Angular, Vue, React）最流行的代码提交标准。其核心目的是让提交历史**可读**、**可搜索**，并支持**自动化生成 Changelog（版本更新日志）**。

### Conventional Commits
| 前缀 | 含义 | 何时使用 |
| --- | --- | --- |
| **feat** | 新功能 | 引入了新特性（Feature） |
| **fix** | 修补 Bug | 修复了某个已知问题 |
| **docs** | 文档 | 只改动了文档、README 等 |
| **style** | 格式 | 不影响逻辑的改动（空格、分号、缩进等，不是指 CSS） |
| **refactor** | 重构 | 既不是修复 Bug 也不是新增功能的代码改动 |
| **perf** | 性能 | 提高性能的代码改动 |
| **test** | 测试 | 添加或修改测试代码 |
| **build** | 构建 | 影响构建系统或外部依赖（如 npm, gulp, webpack） |
| **ci** | 持续集成 | 修改 CI 配置文件或脚本（如 GitHub Actions） |
| **chore** | 杂务 | 其他不修改源代码或测试文件的变动（如修改 .gitignore） |
| **revert** | 回滚 | 撤销之前的某个提交 |

---

### 3. 示例

* **简单提交：**
  `feat: add user login support`
* **带范围的提交：**
  `fix(api): handle null response from server`
* **重大变更（Breaking Change）：**
  通常在冒号前加一个 `!`，或在页脚注明。
  `feat!: remove deprecated oauth1 support`

---
