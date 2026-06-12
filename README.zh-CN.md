# 儿童 AI 素养课程

[English README](README.md)

儿童 AI 素养课程是一个开源双语项目，面向 7-12 岁儿童，帮助老师、家长和教育志愿者用安全、审慎、负责任的方式开展 AI 启蒙教育。

这个仓库不是泛泛而谈的“AI 很重要”，而是一套可维护、可复用、可公开协作的教学材料。

## 为什么这个项目有价值

孩子已经在现实中接触到 AI 生成的答案、图片和学习工具，但市面上大多数说明都面向成年人、程序员或企业。这个项目补的是缺失的一层：适合儿童、可公开复用、可在课堂和家庭里实际落地的 AI 素养材料。

项目目标不是让孩子依赖 AI，而是帮助他们学会：

- 理解 AI 是什么，不是什么
- 提出更清楚的问题
- 用证据核对答案
- 保护隐私
- 在使用 AI 时保留自己的判断

## 仓库包含什么

- 8 节入门课程
- 教师使用指南
- 家长使用指南
- 教师快速启动包
- 儿童 AI 安全规则
- 可打印练习纸
- 课堂试用反馈模板
- 中英文双语内容
- 维护文档、校验脚本和 CI 流程
- 面向老师入口的 GitHub Pages 页面

## 仓库结构

```text
curriculum/   课程与总纲
guides/       教师、家长、安全与反馈指南
worksheets/   可打印练习纸
docs/         路线图、Pages 页面、试点记录、申请说明、生成清单
scripts/      仓库校验与清单生成脚本
.github/      CI、Issue 模板、PR 模板
PROJECT.md    唯一持续维护的交接状态文件
```

## 当前阶段

当前目标是先完成一套“别人拿到后能开始试用”的公开 starter kit：

- [x] 课程总纲
- [x] 八节课程草案
- [x] 教师指南
- [x] 家长指南
- [x] 安全规则
- [x] 反馈模板
- [x] 教师快速启动包
- [x] 第一课教师包
- [x] 第二课教师包
- [x] 第三课教师包
- [x] 第四课教师包
- [x] 第五课教师包
- [x] 第六课教师包
- [x] 中英文源文件
- [x] 仓库校验与 CI
- [x] GitHub Pages 入口文档
- [ ] 真实课堂或家庭试用反馈

## 如何使用

### 老师

1. 先看 [guides/teacher-starter-pack.zh-CN.md](guides/teacher-starter-pack.zh-CN.md)
2. 再看 [curriculum/00-course-outline.zh-CN.md](curriculum/00-course-outline.zh-CN.md)
3. 如果从第一课开始，直接用 [guides/lesson-01-teacher-packet.zh-CN.md](guides/lesson-01-teacher-packet.zh-CN.md)
4. 如果从第二课开始，直接用 [guides/lesson-02-teacher-packet.zh-CN.md](guides/lesson-02-teacher-packet.zh-CN.md)
5. 也可以通过 [docs/index.md](docs/index.md) 走老师入口式导航
6. 用 [docs/pilot-checklist.zh-CN.md](docs/pilot-checklist.zh-CN.md) 做试点前检查
7. 用 [guides/classroom-trial-feedback-template.zh-CN.md](guides/classroom-trial-feedback-template.zh-CN.md) 记录反馈

### 家长

1. 先看 [guides/parent-guide.zh-CN.md](guides/parent-guide.zh-CN.md)
2. 从课程里选一个短活动
3. 共用一台设备，不输入隐私信息
4. 多讨论“AI 哪些地方可能错了”

### 贡献者

贡献方式、翻译规则和安全审查要求见 [CONTRIBUTING.md](CONTRIBUTING.md)。

### 维护者

把 [PROJECT.md](PROJECT.md) 当成唯一持续维护的交接文件；详细改动看 `git` 历史。真实课堂、家庭或工作坊试点证据统一放到 [docs/pilot-notes/README.md](docs/pilot-notes/README.md) 所说明的目录下。

## 维护流程

这个仓库把儿童安全和内容质量当成一等维护工作。

提交 PR 前请至少完成：

1. 运行 `node scripts/check-repo.mjs`
2. 运行 `node scripts/build-resource-manifest.mjs`
3. 确认新增内容符合儿童年龄特点，不鼓励不安全使用 AI
4. 如新增双语内容，尽量保持中英文配对一致

CI 会在每次 push 和 PR 时重复这些检查。

## 路线图

见 [docs/roadmap.md](docs/roadmap.md)，里面包含后续里程碑、维护重点，以及项目后续要积累的课堂/家庭使用证据。

## 为什么它是公共价值开源项目

这个仓库不是私人备忘录，而是打算长期公开维护、允许别人翻译、改编、审阅和复用的教育基础材料。

因此维护工作不只是“写几篇文档”，还包括：

- 审核涉及儿童安全的措辞
- 分类老师和家长的反馈
- 提升课程表达清晰度
- 跟踪中英文一致性
- 准备可试用的材料包

## 参与贡献

欢迎以下角色参与：

- 老师
- 家长
- 翻译者
- 课程设计者
- 儿童安全审阅者
- 关注教育议题的开源贡献者

从 [CONTRIBUTING.md](CONTRIBUTING.md) 开始。

## 许可证

仓库中的教育文本默认采用 Creative Commons Attribution 4.0 International。`scripts/` 下的代码与工具采用 MIT。详见 [LICENSE.md](LICENSE.md)。
