import Image  from 'next/image';
import desert from '../../../../Assets/First main/Desert.png';
import "../style.css";
import 'animate.css';
import Link from 'next/link';

export default function Desert() {
  return (
    <div className="pageProduct wow fadeInRight">
      <div className="pageProduct-content">
        <Image 
        className="pageProduct-content__img" 
        src={desert} 
        alt="Desert" 
        />

        <div className="pageProduct-text">
          <div className="pageProduct-text__header">
            Десерты
          </div><br/>

          <div className="pageProduct-text__paragraph">
            Капкейки можно заказать в коробочках 4/6/9  штук.<br/>
            Большее количество будет собрано в несколько коробочек<br/>
            Эскимо собирается в коробочки по 4 штуки. Большее количество
            будет собрано в несколько коробочек<br/>
            Cake to go собирается в коробочки по 2 штуки. Большее количество будет собрано в несколько коробочек<br/>
            В стоимость декора входит: кондитерская посыпка и бусины
          </div>

          <div className="pageProduct-text__paragraph">
            Стоимость:<br/>
            Капкейки - 250 рублей/шт от 4 штук<br/>
            Эскимо - 180/шт от 4 штук<br/>
            Cake to go - 500 рублей/шт от 2 штук
          </div>
        </div>

        <div className="pageProduct-block">
          <a href="#feedback">
            <button className="pageProduct-block__button">Заказать</button>
          </a>
          
          <Link href="/Desert">
            <button className="pageProduct-block__button">
              Подробнее
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};