import { createSlice } from '@reduxjs/toolkit';
import type { Order } from './types';

interface StateType {
  order: Order;
}

const initialState: StateType = {
  order: {
    id: 0,
    date: '',
    sum: 0,
    bonusesOutcome: 0,
    bonusesIncome: 0,
    dishesCount: 0,
    dishes: {},
  },
};

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addDish: (state, action) => {
      const { dish, price, img } = action.payload;

      if (!state.order.dishes[dish]) {
        state.order.dishes[dish] = { count: 0, price: 0, img };
        state.order.dishes[dish].count = 1;
        state.order.dishes[dish].price = price;
      } else {
        const currentCount = state.order.dishes[dish].count;
        const currentPrice = state.order.dishes[dish].price;

        state.order.dishes[dish].count = currentCount + 1;
        state.order.dishes[dish].price = currentPrice + price;
      }

      state.order.sum += price;
      state.order.bonusesIncome = state.order.sum / 20;
      state.order.dishesCount += 1;
    },
    removeDish: (state, action) => {
      const { dish } = action.payload;

      if (!state.order.dishes[dish]) {
        alert('Ошибка удаления блюда');
        return;
      }

      const dishCount = state.order.dishes[dish].count;
      const dishPrice = state.order.dishes[dish].price;

      state.order.dishesCount -= dishCount;
      state.order.sum -= dishPrice;

      delete state.order.dishes[dish];
    },
    decrementDish: (state, action) => {
      const { dish } = action.payload;
      const priceForOneDish = state.order.dishes[dish].price / state.order.dishes[dish].count;

      state.order.dishes[dish].count -= 1;
      state.order.dishes[dish].price -= priceForOneDish;

      state.order.dishesCount -= 1;
      state.order.sum -= priceForOneDish;
    },
    incrementDish: (state, action) => {
      const { dish } = action.payload;
      const priceForOneDish = state.order.dishes[dish].price / state.order.dishes[dish].count;

      state.order.dishes[dish].count += 1;
      state.order.dishes[dish].price += priceForOneDish;

      state.order.dishesCount += 1;
      state.order.sum += priceForOneDish;
    },
    repeatOrder: (state, action) => {
      const { order } = action.payload;
      state.order = JSON.parse(JSON.stringify(order));
    },
    resetOrder: (state) => {
      state.order = {
        id: 0,
        date: '',
        sum: 0,
        bonusesOutcome: 0,
        bonusesIncome: 0,
        dishesCount: 0,
        dishes: {},
      };
    },
  },
});

export const { addDish, removeDish, decrementDish, incrementDish, repeatOrder, resetOrder } =
  orderSlice.actions;
export const orderReducer = orderSlice.reducer;
