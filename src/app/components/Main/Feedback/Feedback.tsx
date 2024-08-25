import Form from './Form/Form';
import './style.css';
import 'animate.css';

export default function FeedBack() {
  return (
    <div id="feedback" className='wow fadeInUp'>
      <div className="block">
        <div className="block-text">
          Форма обратной связи
        </div>

        <div className="block-line"></div>
      </div>

      <div className="feedBack">
        <Form />
      </div>
    </div>
  );
};