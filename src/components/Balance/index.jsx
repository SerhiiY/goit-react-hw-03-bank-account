import React from 'react';
import css from './style.module.css';
import PropTypes from 'prop-types';

const Balance = ({ balance, income, expences}) => { 
  return (
    <section className={css.balance}>
      <span>⬆{income}$</span>
      <span>⬇{expences}$</span>
      <span>Deposit balance: {balance}$</span>
    </section>

  )
}

Balance.propTypes = {
  balance: PropTypes.number,
  expences: PropTypes.number,
  income: PropTypes.number,
};

Balance.defaultProps = {
  balance: 0,
  expences: 0,
  income: 0,
}

export default Balance;