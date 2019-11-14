import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';

class List extends React.Component {
  static propTypes={
    title:PropTypes.node,
    children:PropTypes.node.isRequired,
  }
  render() {
    return (
      <section className={styles.component}>
        <Hero />
      </section>
    );
  }
}

export default List;