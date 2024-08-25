import Decor from './Decor/Decor';
import Pay from './Pay/Pay';
import './style.css';
import 'animate.css';

export default function Info() {
  return (
    <div id="info" className='wow fadeInUp'>
      <div className="block">
        <div className="block-text">Дополнительная информация</div>

        <div className="block-line"></div>
      </div>

      <Decor />

      <Pay />

      <div className="rools">
        Оформляя заказ, вы соглашаетесь с правилами указаными выше.
      </div>
    </div>
  );
};