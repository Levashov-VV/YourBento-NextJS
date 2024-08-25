import Decor from '../Decor/Decor';
import Image from 'next/image';
import Carousel from './Slider/Slider';
import Desert from '../Assets/Desert/Desert.jpeg';
import './style.css';

export default function MoreDesert () {
  return (
    <div className="main">
      <div className="MoreBentoMax">
        <div className="MoreBentoMax-text">
          <div className="MoreBentoMax-text__title">Десерты</div>

          <div className="MoreBentoMax-text__picture">
            <Image className="MoreBentoMax-text__img" src={Desert} alt="Bento" />
          </div>
        </div>
      </div>

      <div className="felling">
        <div className="felling-title">Ассортимент</div>

        <ul className="felling-list">
          <li>
            <a>Капкейки можно заказать в коробочках 4/6/9  штук.
              Большее количество будет собрано в несколько коробочек</a>
          </li>

          <li>
            <a>Эскимо собирается в коробочки по 4 штуки. Большее
            количество будет собрано в несколько коробочек</a>
          </li>

          <li>
            <a>Cake to go собирается в коробочки по 2 штуки.
            Большее количество будет собрано в несколько коробочек</a>
          </li>
        </ul>
      </div>

        <Carousel />
    </div>
  )
}