'use client'

import Image from 'next/image';
import Logo from '../../Assets//Logo/Logo.png';
import Telegram from '../../Assets//Svg-picture/telegram.svg';
import WhatsApp from '../../Assets//Svg-picture/whatsapp.svg';
import Instagram from '../../Assets//Svg-picture/instagram.svg';
import Telephone from '../../Assets//Svg-picture/phone.svg';
import './style.css';
import { Link } from 'framer';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-address">
        <div>Адрес</div>

        <div>
          г.Волгоград,<br/> ул. Волгоградская 1/6,<br/>7 подъезд, кв 219
        </div>
      </div>

      <div className="footer-range">
      <Link href="/">
          <a type="button" className="footer-button">
            Обо мне
          </a>
        </Link>

        <Link href="/#Range">
          <a type="button" className="footer-button">
            Ассортимент
          </a>
        </Link>

        <Link href="/#myresult">
          <a type="button" className="footer-button">
            Мои работы
          </a>
        </Link>
      </div>

      <Image 
      className="footer-logo" 
      src={Logo} 
      alt="Logo"
      />

      <div className="footer-info">
        <Link href="/#Delevery">
          <a type="button" className="footer-button">
            Доставка
          </a>
        </Link>
        
        <Link href="/#info">
          <a type="button" className="footer-button">
            Дополительная информация
          </a>
        </Link>

        <Link href="/#feedback">
        <a type="button" className="footer-button">
          Форма обратной связи
        </a>
        </Link>
      </div>

      <div className="footer-social">
        <div>Со мной можно связаться</div>

        <div className="footer-social__img">
          <button 
          className="footer-social__btn" 
          title='Телеграм'>
            <a 
            href='https://t.me/mery_whale'
            >
              <Image 
              src={Telegram} 
              className="footer-social__svg" 
              alt="Telegram" 
              />
            </a>
          </button>

          <button 
          className="footer-social__btn" 
          title='Ватсап'>
            <a 
            href='https://api.whatsapp.com/send/?phone=79884940373&text=Здравствуйте%2C+у+меня+есть+вопрос'
            >
              <Image 
              src={WhatsApp} 
              className="footer-social__svg" 
              alt="Whatsapp" 
              />
            </a>
          </button>

          <button 
          className="footer-social__btn" 
          title='Инстаграм'>
            <a 
            href='https://www.instagram.com/your_bento.34?igsh=MW9zcGIyY3N6YnV5cA=='
            >
              <Image 
              src={Instagram} 
              className="footer-social__svg" 
              alt="Instagram" 
              />
            </a>
          </button>

          <button 
          className="footer-social__btn" 
          title='Телефон'>
            <a 
            href='tel:+ 79884940373'
            >
              <Image 
              src={Telephone} 
              className="footer-social__svg" 
              alt="Phone" 
              />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};