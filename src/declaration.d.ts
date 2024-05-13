declare module '*.module.scss' {
  const styles: { [key: string]: string };
  export default styles;
}

type Pizza = {
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
