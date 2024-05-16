import { useState, type ChangeEvent, type FC, type ReactElement } from 'react';
import { useMask } from '@react-input/mask';

import { useAuth } from '@/shared/lib/contexts/AuthContext';
import { usePopup } from '@/shared/lib/contexts/PopupContext';

import { Popup } from '../Popup';
import { CustomButton } from '../CustomButton';
import { CustomMaskInput } from '../CustomInput';

import cl from './AuthCard.module.scss';

export const AuthCard: FC = (): ReactElement => {
  const [phone, setPhone] = useState('');
  const [isPhoneError, setPhoneError] = useState(false);
  const phoneInputRef = useMask({ mask: '+7 (___) ___-__-__', replacement: { _: /\d/ } });

  const [isCode, setIsCode] = useState(false);
  const [code, setCode] = useState('');
  const [isCodeError, setCodeError] = useState(false);
  const codeInputRef = useMask({ mask: '___', replacement: { _: /\d/ } });

  const { signIn } = useAuth();
  const { closeCard } = usePopup();

  const handleChange = (e: ChangeEvent<HTMLInputElement>, type: 'phone' | 'code') => {
    switch (type) {
      case 'phone': {
        setPhoneError(false);
        const { value } = e.target;
        setPhone(value);
        break;
      }
      case 'code': {
        setCodeError(false);
        const { value } = e.target;
        setCode(value);
        break;
      }
      default:
        break;
    }
  };

  const getCode = () => {
    if (phone.length === 18) {
      setIsCode(true);
    } else {
      setPhoneError(true);
    }
  };

  const handleAuth = (phone: string) => {
    signIn(phone);
    closeCard();
  };

  return (
    <Popup>
      <div className={cl.card}>
        <h3 className={cl.card__title}>Вход в личный кабинет</h3>
        <div className={cl.card__item}>
          <CustomMaskInput
            ref={phoneInputRef}
            required
            id="phoneInput"
            label="Номер телефона"
            placeholder="+7 (___) ___-__-__"
            value={phone}
            onChange={(e) => handleChange(e, 'phone')}
          />
          {isPhoneError && <p className={cl.card__error}>Поле обязательно к заполнению!</p>}
        </div>
        {!isCode ? (
          <CustomButton style={{ alignSelf: 'flex-start' }} onClick={getCode}>
            Получить код
          </CustomButton>
        ) : (
          <>
            <div className={cl.card__item}>
              <CustomMaskInput
                ref={codeInputRef}
                id="codeInput"
                label="Вам придет СМС с кодом, введите его в поле ниже:"
                placeholder="___"
                style={{ maxWidth: '130px' }}
                value={code}
                onChange={(e) => handleChange(e, 'code')}
              />
              {isCodeError && <p className={cl.card__error}>Неправильный код!</p>}
            </div>
            <CustomButton style={{ alignSelf: 'flex-start' }} onClick={() => handleAuth(phone)}>
              Войти
            </CustomButton>
          </>
        )}
      </div>
    </Popup>
  );
};
