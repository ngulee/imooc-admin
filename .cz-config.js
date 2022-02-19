module.exports = {
  // 可选类型
  types: [
    { value: 'feat',     name: 'feat:      新功能'},
    { value: 'fix',      name: 'fix:       修复'},
    { value: 'docs',     name: 'docs:      文档变更'},
    { value: 'style',    name: 'style:     代码格式'},
    { value: 'refactor', name: 'refactor:  重构'},
    { value: 'perf',     name: 'perf:      性能优化'},
    { value: 'test',     name: 'test:      增加测试'},
    { value: 'chore',    name: 'chore:     构建过程或辅助工具的变动'},
    { value: 'revert',   name: 'revert:    回退'},
    { value: 'build',    name: 'revert:    打包'},
  ],

  // 消息步骤
  messages: {
    type: '请选择提交类型:',
    customScope: '请输入修改范围(可选)',
    subject: '请简要描述提交(必填)',
    body: '请输入详细描述',
    footer: '请输入要关闭的issue(可选)',
    confirmConfirm: '确认使用以上信息提交'
  },

  // 跳过问题
  skipQuestions: ['body', 'footer'],
  // subject 文字长度默认是72
  subjectLimit: 70
}