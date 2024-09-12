import Bento from './Bento/Bento';
import MiniCake from './MiniCake/MiniCake';
import Bentomax from './BentoMax/BentoMax';
import LongLine from './Longline/Longline';
import Desert from './Desert/Desert';
import MyResult from './MyResult/MyResult';
import './style.css';

export default function Range() {
  return(
    <>
      <header id="Range" className='block'>
        <div className='block-texts'>
          Ассортимент
        </div>

        <div className='block-line'></div>
      </header>

      <Bento />
      <MiniCake />
      <Bentomax />
      <LongLine />
      <Desert />
      <MyResult />
    </>
  );
};