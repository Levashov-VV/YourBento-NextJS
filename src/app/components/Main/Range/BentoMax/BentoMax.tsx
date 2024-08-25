'use client'

import Image from 'next/image';
import Bentomax from '../../../../Assets/First main/Bento-max.png';
import 'animate.css';
import Link  from 'next/link';
import '../style.css';

export default function BentoMax() {

  return (
    <div className="pageProduct wow fadeInRight">
      <div className="pageProduct-content">
          <Image 
          className="pageProduct-content__img" 
          src={Bentomax} 
          alt="Bento-max" 
          />

          <div className="pageProduct-text">
            <div className="pageProduct-text__header">
              Бенто Макс
            </div><br/>

            <div className="pageProduct-text__paragraph">
              Примерный вес 1500  грамм<br/>
              Торт рассчитан на 6-8 персон
            </div>

            <div className="pageProduct-text__paragraph">
              Начинки и бисквиты вы можете
              посмотреть нажав на кнопку подробнее
            </div>

            <div className="pageProduct-text__paragraph">
              Декор: мазки, сердечки,
              нарисованные цветочки,  маленькие надписи входят в стоимость.<br/>
              Другой декор рассчитывается индивидуально
            </div>

            <div className="pageProduct-text__paragraph">
              Стоимость: 2500 рублей
            </div>
          </div>

          <div className="pageProduct-block">
            <a href="#feedback">
              <button className="pageProduct-block__button">Заказать</button>
            </a>
            <Link href="/BentoMax">
              <button className="pageProduct-block__button">
                Подробнее
              </button>
            </Link>
          </div>
      </div>
    </div>
  );
};