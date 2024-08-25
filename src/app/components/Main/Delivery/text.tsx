import Image from 'next/image';
import Car from '../../../Assets/Svg-picture/Car.svg';
import './style.css';

export default function Text() {
  return (
    <div className="content-text">
      <div className="delivery-text">
        Доставка осуществляется в интервале с 10:00 до 22:00.
      </div>

      <div className="delivery-header">Самовывоз:</div>

      <div className="delivery-text">
        Вы можете забрать свой заказ самостоятельно 
        с 10:00 до 22:00.<br/>
        Другое время обговаривается индивидуально.
      </div>

      <div className="delivery-header">Адрес:</div>

      <div className="delivery-text">
        г. Волгоград, улица Волгоградская 1/6, подъезд 7, кв.219
      </div>

      <div>
        <div className="delivery-text__title">
          <Image
            className="car"
            src={Car}
            alt="Car"
          />

          <div className="delivery-text">Правила доставки заказа</div>
        </div>

        <div>
          <ul>
            <li className="delivery-text">
              Составление интервалов отправки и места получения
              заказа должно быть обговоренно не менее чем за 24 часа
            </li>

            <li className="delivery-text">
              В случае если вы не можете забрать торт самовывозом, 
              возможно оформление доставки как с моей, так и с вашей стороны
              (по выбору клиента)
            </li>

            <li className="delivery-text">
              Оплата доставки производится либо
              до передачи заказа курьеру, либо оплата производится
              непосредственно при получение заказа.
            </li>

            <li className="delivery-text">
              Отменить доставку заказа после передачи его курьеру или
              перенести время доставки нельзя
            </li>

            <li className="delivery-text">
              В случае, если я не могу с вами связаться
              в назначенное время отправления заказа, его отправление будет остановленно
              и согласовано с вами в индивидуальном порядке
            </li>

            <li className="delivery-text">
              В случае, если курьер не может с вами связаться, в момент
              доставки заказа, он будет ожидать установленное время, после
              чего ваш заказ будет возвращён обратно и его доставка будет
              обговариваться в индивидуальном порядке.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};