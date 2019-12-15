import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './Header.scss';
import Container from '../Container/Container';
import Icon from '../Icon/Icon';
import { settings } from '../../data/dataStore';
import Search  from '../Search/Search.js';


export default class Header extends Component {
  render() {
    const { icon, homeTitle, infoTitle, faqTitle }=settings.header;

    return (
      <header className={styles.component}>
        <Container>
          <div className={styles.wrapper}>
            <Link to='/' className={styles.logo} >
              <Icon name={icon} />
            </Link>
            <nav>
              <NavLink exact to='/' activeClassName='active'>{homeTitle}</NavLink>
              <NavLink exact to='/info' activeClassName='active'>{infoTitle}</NavLink>
              <NavLink exact to='/faq' activeClassName='active'>{faqTitle}</NavLink>
              <Search/>
            </nav>
          </div>
        </Container>
      </header>
    );
  }
}