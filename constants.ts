
import { NailArt } from './types';

export const NAIL_ART_STYLES: NailArt[] = [
  {
    id: '1',
    name: '法式優雅 (Classic French)',
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=800&q=80',
    description: '經典法式美甲，簡約中的奢華。透明的底色搭配潔白的指尖微笑線，展現永恆的優雅與職場專業感。適合所有膚色，永不過時的選擇。',
    category: '經典',
    relatedImages: [
      'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1586952145021-5d20300c884d?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?auto=format&fit=crop&w=400&q=80',
    ],
    price: 1280
  },
  {
    id: '2',
    name: '漸層星空 (Galaxy Gradient)',
    image: 'https://images.unsplash.com/photo-1632922267756-9b71242b1592?auto=format&fit=crop&w=800&q=80',
    description: '深邃的藍紫色漸層，點綴閃爍的星光與銀河般的亮粉，如同把浩瀚星空穿戴指尖，神秘而迷人。適合夜晚派對或想要展現個性的時刻。',
    category: '藝術',
    relatedImages: [
      'https://images.unsplash.com/photo-1601055903647-87e16f81ad84?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1596920566829-d9de4e00a843?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1532413992378-f169ac26fff0?auto=format&fit=crop&w=400&q=80',
    ],
    price: 1680
  },
  {
    id: '3',
    name: '甜美花卉 (Floral Romance)',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    description: '粉嫩色系搭配精緻手繪乾燥花或水彩花朵，展現女性柔美與春日的甜美氣息，適合約會與婚禮，散發溫柔婉約的氣質。',
    category: '甜美',
    relatedImages: [
      'https://images.unsplash.com/photo-1526045431048-f857369baa09?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1629360309543-273274f91073?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1506003094589-639964846b78?auto=format&fit=crop&w=400&q=80',
    ],
    price: 1580
  },
  {
    id: '4',
    name: '極簡幾何 (Modern Geometric)',
    image: 'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=800&q=80',
    description: '大膽的線條與幾何形狀組合，搭配撞色設計或負空間藝術 (Negative Space)，現代感十足，是時尚前衛與設計師的最愛。',
    category: '現代',
    relatedImages: [
      'https://images.unsplash.com/photo-1457972851104-4fd469440bf9?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1599538329208-f95004405363?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1635605307729-5b14a37d986e?auto=format&fit=crop&w=400&q=80',
    ],
    price: 1480
  },
  {
    id: '5',
    name: '奢華大理石 (Luxury Marble)',
    image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=800&q=80',
    description: '模仿天然石材的精緻大理石紋路，搭配金箔與金屬飾品點綴，營造低調奢華的高級質感。白大理石清新高雅，黑大理石神秘貴氣。',
    category: '奢華',
    relatedImages: [
      'https://images.unsplash.com/photo-1596920567974-5b2d02b5606d?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1632498308185-5330c91146dc?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1515488764276-beab7607c1e6?auto=format&fit=crop&w=400&q=80',
    ],
    price: 1980
  },
  {
    id: '6',
    name: '活潑跳色 (Pop Art Color)',
    image: 'https://images.unsplash.com/photo-1599693359686-93156105956b?auto=format&fit=crop&w=800&q=80',
    description: '高飽和度的糖果色系跳色搭配，或繪製可愛圖案，為指尖增添無限童趣與夏日活力。適合喜歡大膽嘗試、性格開朗的妳。',
    category: '可愛',
    relatedImages: [
      'https://images.unsplash.com/photo-1624069023030-0f8299a02eb8?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1463043254199-7a3efd782ad1?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=400&q=80',
    ],
    price: 1380
  },
  {
    id: '7',
    name: '閃耀派對 (Glitter Bomb)',
    image: 'https://images.unsplash.com/photo-1609446293511-d76d44cb0696?auto=format&fit=crop&w=800&q=80',
    description: '滿滿的亮片、鑽飾與金屬光澤，Bling Bling 的視覺效果，讓你成為晚宴與派對的絕對焦點。光線折射下更是璀璨奪目。',
    category: '節慶',
    relatedImages: [
      'https://images.unsplash.com/photo-1599695041232-47170a71d693?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1574670189025-320e6fb395e4?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1506669913633-1c09fb1e59af?auto=format&fit=crop&w=400&q=80',
    ],
    price: 1880
  },
  {
    id: '8',
    name: '琥珀暈染 (Amber Tortoiseshell)',
    image: 'https://images.unsplash.com/photo-1600012638490-25e4d9d7b54e?auto=format&fit=crop&w=800&q=80',
    description: '獨特的琥珀色與焦糖色暈染效果，溫潤典雅，散發濃濃的秋冬復古魅力與知性美。搭配金邊設計更顯層次。',
    category: '復古',
    relatedImages: [
      'https://images.unsplash.com/photo-1616091093775-5a0e1a237c43?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1628925023234-184a05b28411?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1560130958-0ea3909538e0?auto=format&fit=crop&w=400&q=80',
    ],
    price: 1580
  },
  {
    id: '9',
    name: '高冷霧面 (Chic Matte)',
    image: 'https://images.unsplash.com/photo-1595867408789-468e3382e90d?auto=format&fit=crop&w=800&q=80',
    description: '打破傳統亮面光澤，霧面絲絨質感的甲面給予指尖低調、內斂且高級的觸感。適合秋冬深色系，如酒紅、墨綠或深藍。',
    category: '簡約',
    relatedImages: [
      'https://images.unsplash.com/photo-1560851691-ebb648e6410d?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1585325701165-351af916e581?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1595476103518-3c8adc0a79e4?auto=format&fit=crop&w=400&q=80',
    ],
    price: 1380
  },
  {
    id: '10',
    name: '極光貓眼 (Cat Eye Aurora)',
    image: 'https://images.unsplash.com/photo-1513373455448-17d6defa269a?auto=format&fit=crop&w=800&q=80',
    description: '獨特的磁性凝膠，隨著光線折射呈現如貓眼般的神秘光帶，或如極光般的夢幻變色，充滿魅惑力與未來科技感。',
    category: '時尚',
    relatedImages: [
      'https://images.unsplash.com/photo-1629215102370-392143b28557?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1633309453488-06c7125848e5?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1520476755973-4a8d8924d429?auto=format&fit=crop&w=400&q=80',
    ],
    price: 1680
  },
];
