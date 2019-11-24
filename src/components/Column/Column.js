import React from 'react';
import styles from './Column.scss';
import Icon from '../Icon/Icon.js';
// import Creator from '../Creator/Creator.js';
// import Card from '../Card/Card.js';
import PropTypes from 'prop-types';
// import { settings } from '../../data/dataStore.js';


class Column extends React.Component {
  // state = {
  //   cards: this.props.cards || [],
  // }
  static propTypes = {
    title: PropTypes.node.isRequired,
    // image: PropTypes.string.isRequired,
    cards: PropTypes.array,
    icon: PropTypes.string.isRequired,

  };

  // addCard(title) {
  //   this.setState(state => ({
  //     cards: [
  //       ...state.cards,
  //       {
  //         key: state.cards.length ? state.cards[state.cards.length - 1].key + 1 : 0,
  //         title,
  //         icon: 'list-alt',
  //       },
  //     ],
  //   }));
  // }

  render() {
    const {title, icon}=this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.icon}>
          <Icon name={icon} />
        </span>
        {/* <div className={styles.cards}>
          {this.state.cards.map(({ key, ...cardProps }) => (
            <Card key={key}{...cardProps} />
          ))}
        </div>
        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={title => this.addCard(title)} />
        </div> */}
      </section>
    );
  }
}

export default Column;