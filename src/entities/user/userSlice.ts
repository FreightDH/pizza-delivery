import { createSlice } from '@reduxjs/toolkit';

interface StateType {
  user: User;
}

// user: {
//   firstName: 'Максим',
//   lastName: 'Золотков',
//   birthdayDate: '19.04.2003',
//   phone: '',
//   email: 'maxim.zolotkov@yandex.ru',
//   bonuses: 0,
// }

const initialState: StateType = {
  user: {
    firstName: '',
    lastName: '',
    birthdayDate: '',
    phone: '',
    email: '',
    bonuses: 0,
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
      };
    },
  },
});

export const { changeUser, setUser, setUserNull } = userSlice.actions;
export const userReducer = userSlice.reducer;
