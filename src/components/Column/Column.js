import React from 'react';
import styles from "./Column.scss";
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore.js';
import Creator from '../Creator/Creator.js';

class Column extends React.Component {
  state={
    cards:this.props.cards||[],
  }
  static propTypes = {
    title: PropTypes.node.isRequired,
    cards:PropTypes.array,

  };

addCard(title){
  this.setState(state=>({
    cards:[
      ...state.cards,
      {
        key: state.cards.length ? state.cards[state.cards.length - 1].key + 1 : 0,
        title,
        icon: 'list-alt',
        cards: []
      }
    ]
  }))
}

  render() {
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{this.props.title}</h3>
        <div className={styles.cards}>
          {this.state.cards.map(({ key, ...cardProps }) => (
            <Column key={key}{...cardProps} />
          ))}
        </div>
        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={title=>this.addCard(title)} />
        </div>
      </section>
    );
  }
}

export default Column;