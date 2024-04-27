// 歌曲库
const songs = [{
  id: '001',
  url: 'https://imc.ahnu.edu.cn/xy/songs/Serenade.mp3',
  title: '小夜曲',
  singer: '舒伯特',
  poster: '/images/cover/night.jpg'
},
{
  id: '002',
  url: 'https://imc.ahnu.edu.cn/xy/songs/EndlessHorizon.mp3',
  title: '无尽的地平线',
  singer: '班得瑞',
  poster: '/images/cover/horizon.jpg'
},
{
  id: '003',
  url: 'https://imc.ahnu.edu.cn/xy/songs/MoonSea.mp3',
  title: '月光下的云海',
  singer: '久石让',
  poster: '/images/cover/sky.jpg'
}]

// 导出公共函数和数据
module.exports = {
  songs:songs
}
