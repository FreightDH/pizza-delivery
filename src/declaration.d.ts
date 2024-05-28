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

type Order = {
  id: number;
  date: string;
  sum: number;
  bonusesOutcome: number;
  bonusesIncome: number;
  dishes: string[];
};

type User = {
  firstName: string;
  lastName: string;
  birthdayDate: string;
  phone: string;
  email: string;
  bonuses: number;
  ordersHistory: Order[];
};
