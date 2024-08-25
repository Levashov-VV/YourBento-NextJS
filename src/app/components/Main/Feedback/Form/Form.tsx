'use client';

import Image from 'next/image';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Docs from '../../../../Assets/Svg-picture/document.svg';
import './style.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];


export default function Leftpart() {
  const [value, onChange] = useState<Value>(new Date());


  return (
    <form id="form" >
      <div className="feedBack-leftpart">
        <label 
          htmlFor="surname"
          className="feedBack-leftpart__text"
          >
          Фамилия и имя
        </label>

        <input id="surname" className="feedBack-leftpart__input" name='name' required/>

        <label 
          htmlFor="telephone" 
          className="feedBack-leftpart__text">
          Телефон
        </label>

        <input
          id="telephone" 
          className="feedBack-leftpart__input" 
          type="number"
          name='telephone'
          required
        />

        <label htmlFor="image" className="feedBack-leftpart__text">
          Примеры фотографий вашего заказа
        </label>

        <input 
          id="image"
          className="feedBack-leftpart__file" 
          name="yourFile" 
          type="file" 
        />

        <div className="feedBack-leftpart__Date">
          <div className="feedBack-leftpart__text">
            Выберите дату доставки вашего заказа
          </div>

          <div className="feedBack-leftpart__img">
            <Calendar onChange={onChange} value={value} />
          </div>
        </div>
      </div>

      <div className="feedBack-rigthpart">
        <div className="feedBack-rigthpart__content">
          <div>
            <label 
              htmlFor="description" 
              className="feedBack-leftpart__text">
              Опишите ваш заказ
            </label>

            <textarea 
              id="description" 
              className="feedBack-rigthpart__textarea" 
            />
          </div>
        </div>


        <label 
          htmlFor="Person" 
          className="feedBack-rigthpart__content"
        >
        <input 
          id="Person" 
          type="checkbox" 
          className="feedBack-rigthpart__checkbox" 
          required 
        />

          <p className="feedBack-rigthpart__text">
            Согласие на обработку персональных данных
          </p>

          <button className="feedBack-rigthpart__btn">
            <a>
              <Image
                className="feedBack-rigthpart__img" 
                src={Docs} 
                alt="Docs"
              />
            </a>
          </button>
        </label>
        <button 
          className="feedBack-rigthpart__text" 
          type='submit'>
          Отправить
        </button>
      </div>
    </form>
  );
};