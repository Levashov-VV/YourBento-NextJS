'use client'

import Image from 'next/image'
import Logo from '../../Assets/Logo/Logo.png'
import './style.css'
import { Link } from 'framer';

export default function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <Image className="logo" src={Logo} alt="logo"/>

        <div className="header-number">+7-988-494-03-73</div>
      </div>
      
      <Link href="/">
          <a type="button" className="header-name__button">
            YourBento
          </a>
      </Link>

      <Link href="/#feedback">
        <a>
          <button className="header-button">
            Заказать
          </button>
        </a>
      </Link>
    </header>
  );
};