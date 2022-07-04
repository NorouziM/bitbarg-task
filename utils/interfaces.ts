export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface ISEO {
  metaTitle: string;
  metaDescription: string;
}

export interface ILiveDataResult {
  id: number;
  icon: string;
  faName: string;
  enName: string;
  coin: string;
  price: number;
  quote: number;
  percent: number;
  decimal: number;
  isFavorite: boolean;
  chart: string[];
}
