import Image from 'next/image';
import Link from 'next/link';
import BentoImg from '../../../../Assets/First main/Bento.png';
import '../style.css';

export default function Bento() {
  return (
    
    <div className="pageProduct wow fadeInRight">
      <div className="pageProduct-content">
        <Image 
        className="pageProduct-content__img" 
        src={BentoImg} 
        alt="Bento-cake" 
        />

        <div className="pageProduct-text">
          <div className="pageProduct-text__header">
            Бенто-торт 
          </div><br/>

          <div className="pageProduct-text__paragraph">
            Примерный вес 400- 450 грамм <br/>
            Торт рассчитан на 1-2 персоны
          </div>

          <div className="pageProduct-text__paragraph">
            Начинки для бенто:<br/>
            Сникерс(солёная карамель + арахис), вишня, клубника, банан в карамели
          </div>

          <div className="pageProduct-text__paragraph">
            Бисквит на выбор:<br/>
            Ванильный, шоколадный, красный бархат<br/>
            Декор: Мазки, сердечки, нарисованные цветочки,  маленькие надписи входят в стоимость.<br/>
            Другой декор рассчитывается индивидуально
          </div>
          
          <div className="pageProduct-text__paragraph">
            Стоимость: 1200 рублей
          </div>
        </div>

        <div className='pageProduct-block'>
          <a href="#feedback">
            <button className='pageProduct-block__button'>Заказать</button>
          </a>
          <Link href="/Bento">
          <button className='pageProduct-block__button'>
            Подробнее
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};