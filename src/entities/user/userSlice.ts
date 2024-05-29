import { createSlice } from '@reduxjs/toolkit';

interface StateType {
  user: User;
}

// user: {
//   firstName: 'Максим';
//   lastName: 'Золотков';
//   birthdayDate: '19.04.2003';
//   phone: '';
//   email: 'maxim.zolotkov@yandex.ru';
//   bonuses: 0;
//   ordersHistory: [
//     {
//       id: 1,
//       date: '16.04.2024 15:36';
//       sum: 1650;
//       bonusesOutcome: 0;
//       bonusesIncome: 82.5;
//       dishes: ['Пепперонни 40см, традиционное тесто', 'Сырный цыпленок 30см, традиционное тесто'];
//     },
//     {
//       id: 2,
//       date: '15.03.2024 12:43';
//       sum: 925;
//       bonusesOutcome: 0;
//       bonusesIncome: 46;
//       dishes: ['Пепперонни 40см, традиционное тесто', 'Сырный цыпленок 30см, традиционное тесто'];
//     },
//   ];
// };

// user: {
//   firstName: '',
//   lastName: '',
//   birthdayDate: '',
//   phone: '',
//   email: '',
//   bonuses: 0,
//   ordersHistory: [],
// },

const initialState: StateType = {
  user: {
    firstName: 'Максим',
    lastName: 'Золотков',
    birthdayDate: '19.04.2003',
    phone: '',
    email: 'maxim.zolotkov@yandex.ru',
    bonuses: 0,
    ordersHistory: [
      {
        id: 1,
        date: '16.04.2024 15:36',
        sum: 1650,
        bonusesOutcome: 0,
        bonusesIncome: 82.5,
        dishesCount: 2,
        dishes: {
          'Пепперонни 40см, традиционное тесто': 1,
          'Сырный цыпленок 30см, традиционное тесто': 1,
        },
      },
      {
        id: 2,
        date: '15.03.2024 12:43',
        sum: 925,
        bonusesOutcome: 0,
        bonusesIncome: 46,
        dishesCount: 1,
        dishes: {
          'Пепперонни 40см, традиционное тесто': 1,
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
