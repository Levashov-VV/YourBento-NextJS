import Range from './Range/Range';
import Delivery from './Delivery/Delivery';
import Info from './Info/Info';
import FeedBack from './Feedback/Feedback';
import './style.css';
import ForMe from './ForMe/ForMe';

export default function Main() {
  return (
    <div className='main'>
      <ForMe />
      <Range />
      <Delivery />
      <Info />
      <FeedBack /> 
    </div>
  );
};