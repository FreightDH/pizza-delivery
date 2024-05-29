export type Order = {
  id: number;
  date: string;
  sum: number;
  bonusesOutcome: number;
  bonusesIncome: number;
  dishesCount: number;
  dishes: {
    [name: string]: number;
  };
};

export type OrderDetails = {
  dishes: { name: string; count: number }[];
  sum: number;
};
