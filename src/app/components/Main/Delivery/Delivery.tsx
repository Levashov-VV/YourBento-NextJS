import Text from './text';
import './style.css';
import 'animate.css';

export default function Delivery() {
  return (
    <div id="Delevery" className='wow fadeInUp'>
      <div className="block">
        <div className="block-text"> Доставка и оплата</div>

        <div className="block-line"></div>
      </div>

      <div className="delivery">
        <div className="delivery-paragraph">
          Доставка осуществляется по тарифам такси (Яндекс и inDrive).
          Доставка ярусных тортов производится мною лично и 
          оплата доставки обговаривается в индивидуальном порядке.
        </div>

        <div className="content">
          <Text />
          <iframe id='map'
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A0247798d837ad99b7f806c8f9d4a6f7b84f66857f4b799f37f2178f050583b00&amp;source=constructor"
            width="720"
            height="640"/>
        </div>
      </div>
    </div>
  );
};