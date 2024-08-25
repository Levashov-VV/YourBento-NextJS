import Image from 'next/image';
import Check from '../../../../Assets/Svg-picture/Check.svg';

export default function Pay() {
  return (
    <>
      <div className="title">
        <Image 
          className="title-img "
          src={Check} 
          alt="Check"
        />

        <div className="title-text">Оплата заказа и его отмена</div>
      </div>

      <div className="infoText">
        <ul>
          <li className="infoText-list">
            Я работаю по 100% предоплате
          </li>

          <li className="infoText-list">
            Заказ не считается подтвержденным, пока он не будетполностью оплачен
          </li>

          <li className="infoText-list">
            Отменить заказ можно с полным возвратом в случае,
            если для вашего десерта не был куплен декор и сделаны заготовки. Денежные средства в данном случае
            будут направлены вам на карту, с которой поступил платёж
          </li>
        </ul>
      </div>
    </>
  );
};