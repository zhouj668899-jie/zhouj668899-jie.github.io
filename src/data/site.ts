// 网站所有文案集中在这里，改内容只改这个文件。
// 规则：只用「Jay」，不写真名；不写任何真实客户名称。

export const SITE = {
  name: 'Jay',
  title: 'Jay · 医疗器械工程师 × AI 工作流',
  description: '做医疗器械的工程师，也在用 AI 重做自己的工作方式。图纸审核、报价、质量体系，以及 AI 工作台、Skill 与教学。',
  github: 'https://github.com/zhouj668899-jie',
  // 以下为待补充的占位项，填好后页面会自动显示
  douyinId: '', // 抖音号，例如 'jay_ai'
  douyinUrl: '', // 抖音主页链接
  wechatQr: '', // 企业合作微信二维码，放到 public/img/ 后填 '/img/xxx.png'
};

export const TRACKS = [
  {
    key: 'med',
    label: '主线一',
    title: '医疗器械工程师',
    img: '/img/jay-think.png',
    intro: '长期和导管、鞘管、弹簧这类精密零件打交道，从一张图纸看到能不能做、怎么做、要花多少钱。',
    items: [
      { name: '图纸审核', text: '导管、鞘管、弹簧图纸逐页检查尺寸、公差、材料和工艺风险，按轻重排好问题清单。' },
      { name: 'BOM 与报价', text: '从图纸推出物料、工序和工时，按历史报价校准，出一份能直接给客户的报价单。' },
      { name: '质量体系文件', text: '熟悉 ISO 13485，SOP、报告、技术交底书这些文件能审能写。' },
    ],
  },
  {
    key: 'ai',
    label: '主线二',
    title: 'AI 工作流实践者',
    img: '/img/jay-code.png',
    intro: '我把自己的日常工作都搬进了一个自己搭的 AI 工作台里，再把用顺手的方法整理出来教给别人。',
    items: [
      { name: '个人 AI 工作台', text: '消息、图纸、文件、客户、待办放在一个界面，AI 助手直接调用这些数据干活。' },
      { name: 'Skill 定制', text: '把一件反复做的事写成 Skill，让 AI 每次按同一套标准做，结果稳定。' },
      { name: '部署与教学', text: 'Codex、WorkBuddy、豆包这些工具，从环境搭建到上手使用，一对一带着做。' },
    ],
  },
];

export type Project = {
  title: string;
  desc: string;
  url: string;
  tag: '医疗器械' | 'AI 工具' | '方法' | '兴趣';
};

export const PROJECTS: Project[] = [
  { title: 'ISO 13485 法规学习终端', tag: '医疗器械', url: 'https://zhouj668899-jie.github.io/iso13485-study/', desc: '把 ISO 13485:2016 拆成章节，边读边练，适合刚接触质量体系的工程师。' },
  { title: '金属精密加工 · 设备采购与代工决策', tag: '医疗器械', url: 'https://zhouj668899-jie.github.io/medical-device-machining-report/', desc: '医疗器械金属件该自己买设备还是找代工，一份完整的对比和决策报告。' },
  { title: '工艺能力定位与优劣势分析', tag: '方法', url: 'https://zhouj668899-jie.github.io/strengths-weaknesses-analysis/', desc: '一套看清公司工艺能力、找准自己位置的思考方法，做成了可交互的学习页。' },
  { title: '工程师每日工作计划 SOP', tag: '方法', url: 'https://zhouj668899-jie.github.io/engineer-daily-sop/', desc: '工程师怎么排一天的活，从早上列计划到下班复盘的一套固定动作。' },
  { title: '阶段性项目总结 PPT 规范', tag: '方法', url: 'https://zhouj668899-jie.github.io/sop-training-deck/', desc: '项目做到一半要汇报，PPT 怎么写才让领导一眼看懂。' },
  { title: '提示词库', tag: 'AI 工具', url: 'https://zhouj668899-jie.github.io/prompt-library/', desc: '按工作场景分类的 71 个提示词，中英双语，复制就能用。' },
  { title: '华夏千秋 · 中华历史数字长卷', tag: '兴趣', url: 'https://huaxia-history.zhouj-668899.chatgpt.site', desc: '用 AI 做的一卷可以滚动浏览的中国历史长卷。' },
];

export const JOIN = {
  member: {
    title: '抖音专属会员',
    price: '¥12 起 / 月',
    points: [
      '每周日晚 8 点会员直播，一周讲透一个主题',
      '完整会员资料库：Skill 下载、工具包、实操教程',
      '会员群里提问，我和助理一起答',
    ],
    note: '公开直播：每周二、四、六晚 8:30，在抖音。',
  },
  business: {
    title: '企业合作',
    points: [
      'AI 工具部署与团队培训',
      'Skill / 智能体定制',
      '工作台、驾驶舱这类内部系统搭建',
      '医疗器械图纸审核与报价工具',
    ],
    note: '先聊需求，再单独出方案。',
  },
};
