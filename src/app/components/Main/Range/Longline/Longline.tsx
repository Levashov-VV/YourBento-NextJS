import Image from 'next/image';
import Longline from '../../../../Assets/First main/Longline.png';
import '../style.css';
import 'animate.css';
import Link from 'next/link';


export default function LongLine() {
  
  return (
    <div className="pageProduct wow fadeInLeft">
      <div className="pageProduct-content">
        <Image 
        className="pageProduct-content__img" 
        src={Longline} 
        alt="LongLine" 
        />

        <div className="pageProduct-text">
          <div className="pageProduct-text__header">
            Бисквитные/ярусные торты 
          </div><br/>

          <div className="pageProduct-text__paragraph">
            Рассчитывается 150-200 грамм на персону
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
            Стоимость:<br/>
            От 2 килограмм - бисквитные/ярусные торты(один ярус) - 1700 рублей за килограмм<br/>
            От 2 килограмм - ярусные (от 2-ух ярусов) - 1800 рублей за килограмм
          </div>
        </div>

        <div className="pageProduct-block">
          <a href="#feedback">
            <button className="pageProduct-block__button">Заказать</button>
          </a>
          
          <Link href="/Longline">
            <button className="pageProduct-block__button">
              Подробнее
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};