# workflow

表单设计+工作流

# eslint+prettier+husky

[vue文档](https://cn.vuejs.org/guide/scaling-up/tooling.html#linting)

```
npm install -D eslint eslint-plugin-vue vue-eslint-parser
npm install -D prettier eslint-config-prettier eslint-plugin-prettier 
npm install -D @typescript-eslint/eslint-plugin @typescript-eslint/parser
npm install -D husky
husky install
npm install -D lint-staged
npm install -D stylelint stylelint-config-standard stylelint-prettier postcss-less stylelint-config-recommended-vue stylelint-order
```

# 说明

1. 基本包:eslint负责代码检验,prettier负责格式化
2. eslint-plugin-vue,vue-eslint-parser:和vue代码检验有关
3. eslint-config-prettier:关闭 Prettier 已经负责处理的代码格式相关的规则
4. eslint-plugin-prettier:把prettier 作为 ESLint 的规则来使用，相当于代码不符合 Prettier 的标准时， 会报一个 ESLint 错误，
   同时也可以通过 eslint --fix 来进行格式化。
5. @typescript-eslint/eslint-plugin,@typescript-eslint/parser:ts相关
6. husky:安装 pre-commit钩子，这样就可以在git commit之前运行脚本来检测提交的代码是否规范并且格式化不规范的代码。
7. lint-staged:只会对 Git 暂存区(git add 的代码)内的代码进行检查而不是全量代码
