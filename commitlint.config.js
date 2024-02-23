/*
 * @Author: zhaohui
 * @Date: 2021-09-16 15:58:57
 * @LastEditTime: 2021-09-18 10:06:21
 * @LastEditors: zhaohui
 * @Description:
 * @FilePath: /xingyuan/platform/web/commitlint.config.js
 */
module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "build", // 发布版本
        "chore", // 改变构建流程、或者增加依赖库、工具等
        "ci", // 持续集成修改
        "docs", // 文档修改
        "feat", // 新增功能
        "fix", // 修复缺陷
        "perf", // 优化相关，比如提升性能、体验
        "refactor", // 代码重构
        "revert", // 回退版本
        "style", // 样式修改
        "hotfix", // 紧急修改修改
        "test" // 测试用例修改
      ]
    ]
  }
};
