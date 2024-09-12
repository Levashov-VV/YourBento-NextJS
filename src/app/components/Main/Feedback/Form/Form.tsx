'use client';

import Image from 'next/image';
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';
import { Nullable } from "primereact/ts-helpers";
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'react-calendar/dist/Calendar.css';
import Docs from '../../../../Assets/Svg-picture/document.svg';
import './style.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];


export default function Leftpart() {
  const [date, setDate] = useState<Nullable<Date>>(null);


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

          <div className="card flex justify-content-center">
            <Calendar 
              value={date} 
              onChange={(e) => setDate(e.value)} 
              dateFormat="dd/mm/yy"
            />
          </div>
        </div>
      </div>

      <div className="feedBack-rigthpart">
        <div className="feedBack-rigthpart__content">
          <div className='textarea'>
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