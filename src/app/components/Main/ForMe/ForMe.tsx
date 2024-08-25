import Image from 'next/image';
import './style.css';
import 'animate.css';
import About from '../../../Assets/First main/Image-ForMe.png'

export default function ForMe() {
  return (
    <div className='about'>
      <div className="about-text">
        <div>Привет!<br/> Меня зовут Мария Рожкова</div>
        <div className='about-subtext'>
        Это мой сайт, на котором вы можете ознакомиться
        с ассортиментом и выбрать десерт. Я именно тот кондитер, который будет радовать
        вас и ваших близких в лучшие моменты вашей жизни!
        </div>
      </div>

      <div className="about-image">
        <Image 
          className='about-image'
          src={About} 
          alt="Bento-cake" 
          width={450}
          height={450}
        />
      </div>
    </div>
  );
};