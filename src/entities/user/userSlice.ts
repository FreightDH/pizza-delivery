import { createSlice } from '@reduxjs/toolkit';
import { chickenCheese, pepperoni } from '../dishes/assets';

interface StateType {
  user: User;
}

const initialState: StateType = {
  user: {
    firstName: 'Максим',
    lastName: 'Золотков',
    birthdayDate: '19.04.2003',
    phone: '',
    email: 'maxim.zolotkov@yandex.ru',
    bonuses: 1000,
    ordersHistory: [
      {
        id: 1,
        date: '16.04.2024 15:36',
        sum: 2575,
        bonusesOutcome: 0,
        bonusesIncome: 82.5,
        dishesCount: 3,
        dishes: {
          'Пепперони, 40см, традиционное тесто': {
            count: 2,
            price: 1850,
            img: pepperoni,
          },
          'Сырный цыпленок, 30см, традиционное тесто': {
            count: 1,
            price: 725,
            img: chickenCheese,
          },
        },
      },
      {
        id: 2,
        date: '15.03.2024 12:43',
        sum: 1850,
        bonusesOutcome: 0,
        bonusesIncome: 92.5,
        dishesCount: 2,
        dishes: {
          'Пепперони, 40см, традиционное тесто': {
            count: 2,
            price: 1850,
            img: pepperoni,
          },
        },
      },
    ],
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeUser: (state, action) => {
      const { field, value } = action.payload;
      state.user = { ...state.user, [field]: value };
    },
    setUser: (state, action) => {
      const { editedUser } = action.payload;
      state.user = editedUser;
    },
    setUserNull: (state) => {
      state.user = {
        firstName: '',
        lastName: '',
        birthdayDate: '',
        phone: '',
        email: '',
        bonuses: 0,
        ordersHistory: [],
      };
    },
  },
});

export const { changeUser, setUser, setUserNull } = userSlice.actions;
export const userReducer = userSlice.reducer;
