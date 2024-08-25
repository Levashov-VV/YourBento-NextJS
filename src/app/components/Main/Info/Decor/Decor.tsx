import Image from 'next/image';
import Bag from '../../../../Assets/Svg-picture/paper-bag.svg';

export default function Decor() {
  return (
    <>
      <div className="title">
        <Image
          className="title-img"
          src={Bag}
          alt="Bag"
          />

        <div className="title-text">Оформление</div>
      </div>

      <div className="infoText">
        <ul>
          <li className="infoText-list">
            Сделать идентичный дизайн 1 в 1 невозможно,
            так как все декоры выполняются в ручную, но я сделаю всё возможное,
            чтобы оригиналыл схож с референсом.
          </li>

          <li className="infoText-list">
            При оформление декора используются пищевые красители,
            которые могут покрасить ваши губы и язык.
          </li>

          <li className="infoText-list">
            При оформление заказа просьба учитывать,
            что срок годности бисквитных тортиков составляет 72 часа.
          </li>
        </ul>
      </div>
    </>
  );
};