import { createSlice } from '@reduxjs/toolkit';
import { dishes } from './dishesInfo';

interface StateType {
  dishes: Pizza[];
}

const initialState: StateType = {
  dishes,
};

export const dishesSlice = createSlice({
  name: 'dishes',
  initialState,
  reducers: {
    handleFilter: (state, action) => {
      const { query } = action.payload;

      switch (query) {
        case 'Мясные':
          state.dishes = dishes.filter((dish) => !dish.isVegan);
          break;
        case 'Вегетарианские':
          state.dishes = dishes.filter((dish) => dish.isVegan);
          break;
        case 'Острые':
          state.dishes = dishes.filter((dish) => dish.isHot);
          break;
        default:
          state.dishes = dishes;
          break;
      }
    },
    handleSort: (state, action) => {
      const { query } = action.payload;

      switch (query) {
        case 'популярности':
          state.dishes.sort((a, b) => a.id - b.id);
          break;
        case 'цене':
          state.dishes.sort((a, b) => a.price[0] - b.price[0]);
          break;
        case 'названию':
          state.dishes.sort((a, b) => a.name.localeCompare(b.name));
          break;
        default:
          state.dishes = dishes;
          break;
      }
    },
  },
});

export const { handleFilter, handleSort } = dishesSlice.actions;
export const dishesReducer = dishesSlice.reducer;
