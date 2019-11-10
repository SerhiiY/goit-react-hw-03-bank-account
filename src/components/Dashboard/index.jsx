import React, { Component } from 'react';
import shortid from 'shortid';

import Controls from '../Controls';
import Balance from '../Balance';
import TransactionHistory from '../TransactionHistory';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import css from './style.module.css';

class Dashboard extends Component {
  constructor() {
    super();
    this.onDeposit = this.onDeposit.bind(this);
    this.onWithdraw = this.onWithdraw.bind(this);
    this.newTransaction = this.newTransaction.bind(this);
    this.calcIncome = this.calcIncome.bind(this);
    this.calcExpences = this.calcExpences.bind(this);
  }

  state = {
    transactions: [],
    balance: 0,
  }

  componentDidMount() {
    const savedTransactionList = localStorage.getItem('transactions'),
      savedBalance = localStorage.getItem('balance');

    if (savedTransactionList && savedBalance) {
      this.setState({
        transactions: JSON.parse(savedTransactionList),
        balance: +savedBalance
      });
    }
  }

  componentDidUpdate() {
    const { transactions, balance } = this.state;
    localStorage.setItem('transactions', JSON.stringify(transactions));
    localStorage.setItem('balance', balance);
  }

  onDeposit(amount) {
    this.newTransaction(amount, 'deposit');
    this.setState(prevState => ({ balance: prevState.balance + +amount }));
    toast.success("Операция успешна!");
  }

  onWithdraw(amount) {
    this.newTransaction(amount, 'withdrawal');
    this.setState(prevState => ({ balance: prevState.balance - +amount }));
    toast.success("Операция успешна!");
  }

  newTransaction(amount, type) {
    const date = new Date();

    const transaction = {
      id: shortid.generate(),
      type: type,
      amount: amount,
      date: date.toLocaleString(),
    }

    this.setState(prevState => ({ transactions: [...prevState.transactions, transaction] }));
  }

  calcIncome() {
    const filteredArr = this.state.transactions.filter(el => el.type === "deposit"),
      sum = filteredArr.reduce((acc, el) => acc + +el.amount, 0);
    return sum;
  }

  calcExpences() {
    const filteredArr = this.state.transactions.filter(el => el.type === "withdrawal"),
      sum = filteredArr.reduce((acc, el) => acc + +el.amount, 0);
    return sum;
  }

  render() {

    const income = this.calcIncome(),
      expences = this.calcExpences(),
      { balance, transactions } = this.state;
    
    return (
      <div className={css.dashboard}>
        <Controls onDeposit={this.onDeposit} onWithdraw={this.onWithdraw} balance={balance} />
        <Balance balance={balance} income={income} expences={expences}/>
        <TransactionHistory items={transactions} />
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
        />
      </div>
    );
  }
}

export default Dashboard;
