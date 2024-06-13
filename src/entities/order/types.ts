export type Order = {
  id: number;
  date: string;
  sum: number;
  bonusesOutcome: number;
  bonusesIncome: number;
  dishesCount: number;
  dishes: {
    [name: string]: {
      count: number;
      price: number;
      img: string;
    };
  };
};
