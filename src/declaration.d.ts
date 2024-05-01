declare module '*.module.scss' {
  const styles: { [key: string]: string };
  export default styles;
}

type Dish = {
  id: number;
  img: string;
  name: string;
  description: string;
  price: number[];
  weight: number;
  isMeat?: boolean;
  isVegan?: boolean;
  isHot?: boolean;
};
