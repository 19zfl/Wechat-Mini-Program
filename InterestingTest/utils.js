//测试题库
const quizBank = [
    {
      id: 1,
      question: '想象自己正处在一片大森林中，看到面前有一座很旧的小屋。请问这个小屋的门现在是什么状态？',
      options: [
        { value: 'A', text: '开着' },
        { value: 'B', text: '关着' }
      ],
      analysis: {
        'A':'门是开着的：你一个愿意与别人分享的人。',
        'B':'门是关着的：你是一个愿意把事情埋在心底的人。'
      }
    },
    {
      id: 2,
      question: '你走进屋子看到一张桌子，这个桌子的形状是怎样的？',
      options: [
        { value: 'A', text: '圆形/椭圆形' },
        { value: 'B', text: '正方形/长方形' },
        { value: 'C', text: '三角形' }
      ],
      analysis: {
        'A':'圆形/椭圆形：总有朋友在陪伴你。',
        'B':'正方形/长方形：你在交朋友时有点挑剔。',
        'C':'三角形：你的生活里没太多朋友。'
      }
    },
    {
      id: 3,
      question: '桌子上有个花瓶，瓶子里的水有多少呢？',
      options: [
        { value: 'A', text: '空的' },
        { value: 'B', text: '一半' },
        { value: 'C', text: '满的' }
      ],
      analysis: {
        'A':'空的：对目前的生活不满意。',
        'B':'一半：生活只有一半符合你的理想。',
        'C':'满的：对目前的生活非常满意。'
      }
    },
    {
      id: 4,
      question: '瓶子的质地是？',
      options: [
        { value: 'A', text: '玻璃/泥土/陶瓷' },
        { value: 'B', text: '金属/塑料/木头' }
      ],
      analysis: {
        'A':'玻璃/泥土/陶瓷：你一个脆弱的人。',
        'B':'金属/塑料/木头：你是一个坚强的人。',
      }
    }
  ]
  
  module.exports = {
      quizBank:quizBank
  }