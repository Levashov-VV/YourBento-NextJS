import Image from 'next/image';
import Minicake from '../../../../Assets/First main/MiniCake.png';
import 'animate.css';
import Link from 'next/link';
import '../style.css';

export default function MiniCake() {

  return (
    <div className="pageProduct wow fadeInLeft">
      <div className="pageProduct-content">
        <Image 
        className="pageProduct-content__img"
        src={Minicake} 
        alt="MiniCake" 
        />

        <div className="pageProduct-text">
          <div className="pageProduct-text__header">
            Mini Cake 
          </div><br/>

          <div className="pageProduct-text__paragraph">
            Примерный вес  1000 грамм <br/>
            Торт рассчитан на 4-6 персоны
          </div>

          <div className="pageProduct-text__paragraph">
            Начинки и бисквиты вы можете 
            посмотреть нажав на кнопку подробнее
          </div>

          <div className="pageProduct-text__paragraph">
            Декор: мазки, сердечки,
            нарисованные цветочки,
            маленькие надписи входят в стоимость.<br/>
            Другой декор рассчитывается индивидуально
          </div>

          <div className="pageProduct-text__paragraph">
            Стоимость: 2000 рублей
          </div>
        </div>

        <div className="pageProduct-block">
          <a href="#feedback">
            <button className="pageProduct-block__button">Заказать</button>
          </a>
          
          <Link href="/MiniCake">
            <button className="pageProduct-block__button">
              Подробнее
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};