import type { ChangeEvent } from 'react';
import { useState, type FC, type ReactElement } from 'react';
import { useMask } from '@react-input/mask';

import { useAppDispatch, useAppSelector } from '@/shared/lib';

import { CustomInput, CustomMaskInput } from '@/shared/UI/CustomInput';
import { CustomButton } from '@/shared/UI/CustomButton';

import cl from '../ProfilePage.module.scss';
import { setUser } from '@/entities/user/userSlice';

export const ProfileInfo: FC = (): ReactElement => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.userReducer.user);
  const [editedUser, setEditedUser] = useState(user);

  const [isEdit, setEdit] = useState(false);

  const phoneInputRef = useMask({ mask: '+7 (___) ___-__-__', replacement: { _: /\d/ } });
  const dateInputRef = useMask({ mask: 'дд.мм.гггг', replacement: { д: /\d/, м: /\d/, г: /\d/ } });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  const handleClick = () => {
    if (isEdit) {
      dispatch(setUser({ editedUser }));
      setEdit(false);
    } else {
      setEdit(true);
    }
  };

  return (
    <div className={cl.info}>
      <div className={cl.info__inputs}>
        <CustomInput
          disabled={!isEdit}
          label="Имя"
          name="firstName"
          value={editedUser.firstName}
          onChange={handleChange}
        />
        <CustomInput
          disabled={!isEdit}
          label="Фамилия"
          name="lastName"
          value={editedUser.lastName}
          onChange={handleChange}
        />
        <CustomMaskInput
          ref={dateInputRef}
          disabled={!isEdit}
          label="Дата рождения"
          name="birthdayDate"
          placeholder={editedUser.birthdayDate ? '' : 'дд.мм.гггг'}
          value={editedUser.birthdayDate}
          onChange={handleChange}
        />
        <CustomMaskInput
          ref={phoneInputRef}
          disabled={!isEdit}
          id="phoneInput"
          label="Номер телефона"
          name="phone"
          placeholder={editedUser.phone ? '' : '+7 (___)-___-__-__'}
          value={editedUser.phone}
          onChange={handleChange}
        />
        <CustomInput
          disabled={!isEdit}
          label="Адрес электронной почты"
          name="email"
          value={editedUser.email}
          onChange={handleChange}
        />
      </div>
      <CustomButton onClick={handleClick}>{isEdit ? 'Сохранить' : 'Редактировать'}</CustomButton>
    </div>
  );
};
