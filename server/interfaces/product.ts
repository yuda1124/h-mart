export interface IProduct {
  name: string;
  model: string;
  maker: string;
  price: number;
  colors: JSON;
  thumbUrl: string;
  infoUrl: string;
  activation?: boolean;
}
