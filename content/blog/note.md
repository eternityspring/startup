---
title: 记录
description: 记录开发过程中的奇思妙想
---

# 开发 idea

参考块：https://tailark.com/hero-section

你看到的这种在前缀中使用冒号的写法，遵循的是 **Conventional Commits（约定式提交）** 规范。

它是目前前端和开源社区（如 Angular, Vue, React）最流行的代码提交标准。其核心目的是让提交历史**可读**、**可搜索**，并支持**自动化生成 Changelog（版本更新日志）**。

### 1. 标准格式

一个典型的约定式提交消息结构如下：

```text
<type>(<scope>): <description>

[可选的正文 (body)]

[可选的脚注 (footer)]

```

* **type（类型）：** 必填，说明这次提交的性质（见下文表格）。
* **scope（范围）：** 可选，说明受影响的模块（如：`auth`, `api`, `sidebar`）。
* **冒号 (:) ：** **必须是半角（英文）冒号**，后面必须紧跟一个**空格**。
* **description（描述）：** 必填，对修改内容的简短总结。

---

### 2. 常用前缀（Type）含义

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

### 4. 为什么要用这个规范？

1. **自动化：** 可以通过工具（如 `standard-version`）根据 `feat` 和 `fix` 自动生成版本号（SemVer）和更新日志。
2. **快速筛选：** 比如你想看最近改了哪些 Bug，直接搜索 `git log --grep="fix"` 即可。
3. **团队协作：** 所有人一眼就能看出这行代码改动的大致意图，不需要点进去看代码。

### 推荐工具

如果你想在项目中强制执行这个规范，可以安装：

* **Commitizen：** 一个命令行交互工具，引导你选择 type 和填写描述。
* **Commitlint：** 结合 Husky 使用，如果你的 commit message 不符合冒号规范，会直接拦截并报错，不允许提交。

**你想知道如何在你的项目中配置这种自动检查工具吗？**