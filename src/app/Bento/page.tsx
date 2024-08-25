import Decor from '../Decor/Decor';
import Image from 'next/image';
import Carousel from './Slider/Slider';
import Bento from '../Assets/Bento-cake/Бенто-торт.jpeg';
import './style.css';

export default function MoreBento () {
  return (
    <div className="main">
    <div className="MoreBentoMax">
      <div className="MoreBentoMax-text">
        <div className="MoreBentoMax-text__title">Бенто-торт</div>

        <div className="MoreBentoMax-text__picture">
          <Image className="MoreBentoMax-text__img" src={Bento} alt="Bento" />
        </div>
      </div>
    </div>

    <div className="felling">
      <div className="felling-title">Начинки</div>

      <ul className="felling-list">
        <li>
          <a>Сникерс (солёная карамель + арахис)</a>
        </li>

        <li>
          <a>Вишня</a>
        </li>

        <li>
          <a>Клубника</a>
        </li>

        <li>
          <a>Банан в карамели</a>
        </li>
        </ul>
    </div>
    
      <Decor />
      
      <Carousel />
    </div>
  )
}