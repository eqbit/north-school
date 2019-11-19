import React from 'react';
import {Link} from 'react-router-dom';
import {getMenuItems} from '../../api/api';
import {HeaderSearch} from '../header-search';
import {HeaderPhones} from '../header-phones';
import {Button} from '../button';

const Header = props => (
  <header className="header">
    <div className="container">
      <div className={props.noLogo ? 'header__row header__row--no-logo' : 'header__row'}>
        <Link to="/" className="header__logo">
          <img src="/images/logo.png" alt=""/>
        </Link>
    
        <div className="header-menu">
      
          {getMenuItems().map((item, index) => (
            <Link to={item.link}
                  className="header-menu__item"
                  key={index}>{item.anchor}</Link>
          ))}
        </div>
    
        <HeaderSearch/>
    
        <HeaderPhones/>
    
        <Button className="btn--tertiary header__btn" handleClick={() => {
          console.log('button triggered');
        }}>Оставить заявку</Button>
      </div>
    </div>
  </header>
);

export {Header};