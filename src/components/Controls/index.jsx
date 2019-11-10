import React from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import css from './style.module.css';

const Controls = ({ onDeposit, onWithdraw, balance }) => {
  
  const state = {
      amount: 0,
      balance: balance,
  }

  const showMsg = (msg) => toast.error(msg);
  
  const handleQuery = ({ target }) => {
    const { amount } = state;
    if (!amount || amount <= 0) return showMsg('Введите сумму для проведения операции!');
    if (target.name === "withdraw") {
      if (state.balance < amount) return showMsg("На счету недостаточно средств для выполнения операции!");
      onWithdraw(+amount.replace(/^0+/, ''));
    }
    if (target.name === "deposit") onDeposit(+amount.replace(/^0+/, ''));
    target.parentNode.querySelector('[name="amount"]').value = 0;
  };


  const handleSetAmount = ({target}) => {
    state[target.name] = target.value;
  };

  return(
    <section className={css.controls}>
      <input type="number" placeholder="Введите сумму" name="amount" onChange={handleSetAmount}/>
      <button type="button" name="deposit" onClick={handleQuery}>Deposit</button>
      <button type="button" name='withdraw' onClick={handleQuery}>Withdraw</button>
    </section>
  )  
}

Controls.propTypes = {
  onDeposit: PropTypes.func,
  onWithdrow: PropTypes.func,
  balance: PropTypes.number,
}

Controls.defaultProps = {
  balance: 0,
}

export default Controls;