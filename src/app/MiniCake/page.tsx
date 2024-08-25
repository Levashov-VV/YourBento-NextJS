import Decor from '../Decor/Decor';
import Image from 'next/image';
import './style.css';
import Carousel from './Slider/Slider';
import MiniCake from '../Assets/Mini-cake/MiniCake.jpeg';
import images1 from '../Assets/Mini-cake/Slider/slider1.jpeg';
import images2 from '../Assets/Mini-cake/Slider/Slider2.jpeg';
import images3 from '../Assets/Mini-cake/Slider/Slider3.jpeg';

export default function MoreMiniCake () {
  return (
    <div className="main">
    <div className="MoreBentoMax">
      <div className="MoreBentoMax-text">
        <div className="MoreBentoMax-text__title">Mini Cake</div>

        <div className="MoreBentoMax-text__picture">
          <Image className="MoreBentoMax-text__img" src={MiniCake} alt="Bento" />
        </div>
      </div>
    </div>

    <div className="felling">
      <div className="felling-title">Начинки</div>

      <ul className="felling-list">
        <li>
          <a>Кокосовый (Нежный кокосовый бисквит, кокосовый ганаш на белом шоколаде, классический кремчиз)</a>
        </li>

        <li>
          <a>Баунти (Шоколадный бисквит, кокосовый ганаш на белом шоколаде, классический кремчиз)</a>
        </li>

        <li>
          <a>Шоколадный (Шоколадный бисквит, шоколадный ганаш на молочном шоколаде, шоколадный кремчиз)</a>
        </li>

        <li>
          <a>Сникерс (Шоколадный бисквит, солёный арахис)</a>
        </li>

        <li>
          <a>Вишня-шоколад (Шоколадный бисквит, вишневое конфи, шоколадный ганаш на молочном шоколаде, классический кремчиз)</a>
        </li>

        <li>
          <a>Черника-кокос (Воздушный ванильный бисквит, черничное конфи, классический кремчиз)</a>
        </li>

        <li>
          <a>Банан-карамель-грецкий орех (Воздушный ванильный бисквит с орехами, бананы в карамели, кремчиз в прослойке с кусочками орехов)</a>
        </li>

        <li>
          <a>Орео (Шоколадный бисквит, кремчиз с крошкой печенья орео, шоколадный ганаш на белом шоколаде)</a>
        </li>

        <li>
          <a>Клубничный бархат (Бархатный красный бисквит с шоколадным послевкусием, клубничный конфитюр классический кремчиз)</a>
        </li>

        <li>
          <a>Ванильно ягодный микс (ягоды на выбор: вишня, клубника, ягодный микс)(Воздушный ванильный бисквит, ягодный конфитюр, классический кремчиз)</a>
        </li>
        </ul>
    </div>
    
      <Decor />

      <Carousel />
    </div>
  )
}