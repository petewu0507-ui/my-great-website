# Git 快速参考指南 - AI 编程实践

## 🚀 日常使用流程

### 开始新功能
```bash
# 创建并切换到新分支
git checkout -b feature-新功能名

# 让 AI 帮您编写代码...

# 查看变更
git status
git diff

# 暂存文件
git add .

# 让 AI 生成 commit message，然后提交
git commit -m "AI生成的message"

# 推送到远程（可选）
git push origin feature-新功能名
```

### 合并到主分支
```bash
# 切换回主分支
git checkout main

# 拉取最新代码
git pull origin main

# 合并功能分支
git merge feature-新功能名

# 推送更新
git push origin main
```

---

## 📝 Commit Message 规范

### 格式
```
<type>: <subject>

<body>

<footer>
```

### Type 类型
- `feat`: 新功能
- `fix`: 修复bug
- `docs`: 文档更新
- `style`: 代码格式（不影响功能）
- `refactor`: 重构
- `test`: 测试相关
- `chore`: 构建/工具相关

### 示例
```bash
# 新功能
git commit -m "feat: add user authentication with OAuth2"

# 修复bug
git commit -m "fix: resolve payment calculation overflow error"

# 重构
git commit -m "refactor: simplify risk scoring algorithm for better performance"

# 文档
git commit -m "docs: update API documentation with new endpoints"
```

---

## 🔍 常用命令

### 查看状态
```bash
# 查看当前状态
git status

# 查看提交历史
git log --oneline

# 查看某次提交的详情
git show <commit-id>

# 查看未提交的变更
git diff
```

### 撤销操作
```bash
# 撤销暂存（但保留修改）
git reset HEAD <file>

# 撤销最后一次提交（保留修改）
git reset --soft HEAD~1

# 完全撤销最后一次提交（丢弃修改）⚠️
git reset --hard HEAD~1

# 放弃某个文件的修改
git checkout -- <file>
```

### 分支管理
```bash
# 查看所有分支
git branch -a

# 创建新分支
git branch <branch-name>

# 删除本地分支
git branch -d <branch-name>

# 删除远程分支
git push origin --delete <branch-name>
```

---

## 🤖 AI + Git 最佳实践

### 1. 小步快跑
- ✅ 每次提交只做一件事
- ✅ 完成一个小功能就提交
- ❌ 不要积累太多变更再提交

### 2. 清晰描述
- ✅ 让 AI 帮您写 commit message
- ✅ 说明"做了什么"和"为什么"
- ❌ 避免模糊的描述如 "update"、"fix bug"

### 3. 经常审查
- ✅ 提交前让 AI 检查代码
- ✅ 使用 `git diff` 查看变更
- ❌ 不要盲目提交

### 4. 善用分支
- ✅ 每个新功能一个分支
- ✅ 分支名要有意义（feature-xxx, fix-xxx）
- ❌ 不要在 main 分支直接开发

---

## ⚠️ 常见问题解决

### 问题1：提交了错误的代码
```bash
# 撤销最后一次提交但保留修改
git reset --soft HEAD~1

# 修改代码后重新提交
git add .
git commit -m "correct message"
```

### 问题2：合并冲突
```bash
# 拉取时出现冲突
git pull origin main

# 手动解决冲突（编辑冲突文件）
# 然后标记为已解决
git add .
git commit -m "fix: resolve merge conflicts"
```

### 问题3：想回到之前的版本
```bash
# 查看提交历史
git log --oneline

# 切换到某个提交（临时查看）
git checkout <commit-id>

# 创建新分支从某个提交开始
git checkout -b <new-branch> <commit-id>
```

---

## 💡 实用技巧

### 技巧1：查看谁修改了某行代码
```bash
git blame <file>
```

### 技巧2：搜索提交历史中的内容
```bash
git log --all --grep="关键词"
```

### 技巧3：比较两个版本的差异
```bash
git diff <commit-id-1> <commit-id-2>
```

### 技巧4：暂存当前工作（不提交）
```bash
# 保存当前进度
git stash

# 恢复保存的进度
git stash pop
```

---

## 🎯 推荐工作流

```
1. git checkout -b feature-xxx          # 创建功能分支
2. [AI 编写代码]                         # 开发功能
3. git status && git diff               # 检查变更
4. git add .                            # 暂存文件
5. [AI 生成 commit message]             # 让 AI 写 message
6. git commit -m "..."                  # 提交
7. git push origin feature-xxx          # 推送（可选）
8. [Pull Request / Code Review]         # 代码审查
9. git checkout main                    # 切换回主分支
10. git merge feature-xxx               # 合并功能
11. git push origin main                # 推送主分支
```

---

## 📚 学习资源

- [Git 官方文档](https://git-scm.com/doc)
- [Pro Git 书籍（免费）](https://git-scm.com/book/zh/v2)
- [Git Cheat Sheet](https://training.github.com/downloads/github-git-cheat-sheet/)

---

**提示**：在 Lingma IDE 中，您可以使用内置的源代码管理面板进行可视化操作，无需记忆所有命令！
