
export interface NailArt {
  id: string;
  name: string;
  image: string;
  description: string;
  category: string;
  relatedImages: string[]; // 新增相關圖片陣列
  price: number;
}
