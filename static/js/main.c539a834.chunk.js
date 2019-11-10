(window["webpackJsonpgoit-react-hw-03-bank-account"]=window["webpackJsonpgoit-react-hw-03-bank-account"]||[]).push([[0],{13:function(e,t,n){e.exports={controls:"style_controls__b5iHy",toast:"style_toast__209uI"}},16:function(e,t,n){e.exports={balance:"style_balance__GF34I"}},17:function(e,t,n){e.exports={TransactionHistory:"style_TransactionHistory__2pH9W"}},18:function(e,t,n){},22:function(e,t,n){e.exports=n(41)},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(4),o=n.n(r),l=n(19),i=n(9),s=n(10),u=n(20),m=n(11),b=n(2),p=n(21),d=n(12),f=n.n(d),h=n(3),E=n(13),y=n.n(E),w=function(e){var t=e.onDeposit,n=e.onWithdraw,a={amount:0,balance:e.balance},r=function(e){return h.b.error(e)},o=function(e){var c=e.target,o=a.amount;if(!o||o<=0)return r("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443 \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438!");if("withdraw"===c.name){if(a.balance<o)return r("\u041d\u0430 \u0441\u0447\u0435\u0442\u0443 \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0434\u043b\u044f \u0441\u043d\u044f\u0442\u0438\u044f!");n(+o.replace(/^0+/,""))}"deposit"===c.name&&t(+o.replace(/^0+/,"")),c.parentNode.querySelector('[name="amount"]').value=0};return c.a.createElement("section",{className:y.a.controls},c.a.createElement("input",{type:"number",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443",name:"amount",onChange:function(e){var t=e.target;a[t.name]=t.value}}),c.a.createElement("button",{type:"button",name:"deposit",onClick:o},"Deposit"),c.a.createElement("button",{type:"button",name:"withdraw",onClick:o},"Withdraw"))};w.defaultProps={balance:0};var v=w,g=n(16),k=n.n(g),O=function(e){var t=e.balance,n=e.income,a=e.expences;return c.a.createElement("section",{className:k.a.balance},c.a.createElement("span",null,"\u2b06",n,"$"),c.a.createElement("span",null,"\u2b07",a,"$"),c.a.createElement("span",null,"Balance: ",t,"$"))};O.defaultProps={balance:0,expences:0,income:0};var S=O,_=n(17),j=n.n(_),x=function(e){var t=e.items.map((function(e){return c.a.createElement("tr",{key:e.id},c.a.createElement("td",null,e.type),c.a.createElement("td",null,e.amount,"$"),c.a.createElement("td",null,e.date))}));return c.a.createElement("table",{className:j.a.TransactionHistory},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Type"),c.a.createElement("th",null,"Amount"),c.a.createElement("th",null,"Currency"))),c.a.createElement("tbody",null,t))};x.defaultProps={items:[]};var I=x,D=(n(39),n(18)),T=n.n(D),W=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).state={transactions:[],balance:0},e.onDeposit=e.onDeposit.bind(Object(b.a)(e)),e.onWithdraw=e.onWithdraw.bind(Object(b.a)(e)),e.newTransaction=e.newTransaction.bind(Object(b.a)(e)),e.calcIncome=e.calcIncome.bind(Object(b.a)(e)),e.calcExpences=e.calcExpences.bind(Object(b.a)(e)),e}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("transactions"),t=localStorage.getItem("balance");e&&t&&this.setState({transactions:JSON.parse(e),balance:+t})}},{key:"componentDidUpdate",value:function(){var e=this.state,t=e.transactions,n=e.balance;localStorage.setItem("transactions",JSON.stringify(t)),localStorage.setItem("balance",n)}},{key:"onDeposit",value:function(e){this.newTransaction(e,"deposit"),this.setState((function(t){return{balance:t.balance+ +e}})),h.b.success("\u041e\u043f\u0435\u0440\u0430\u0446\u0438\u044f \u0443\u0441\u043f\u0435\u0448\u043d\u0430!")}},{key:"onWithdraw",value:function(e){this.newTransaction(e,"withdrawal"),this.setState((function(t){return{balance:t.balance-+e}})),h.b.success("\u041e\u043f\u0435\u0440\u0430\u0446\u0438\u044f \u0443\u0441\u043f\u0435\u0448\u043d\u0430!")}},{key:"newTransaction",value:function(e,t){var n=new Date,a={id:f.a.generate(),type:t,amount:e,date:n.toLocaleString()};this.setState((function(e){return{transactions:[].concat(Object(l.a)(e.transactions),[a])}}))}},{key:"calcIncome",value:function(){return this.state.transactions.filter((function(e){return"deposit"===e.type})).reduce((function(e,t){return e+ +t.amount}),0)}},{key:"calcExpences",value:function(){return this.state.transactions.filter((function(e){return"withdrawal"===e.type})).reduce((function(e,t){return e+ +t.amount}),0)}},{key:"render",value:function(){var e=this.calcIncome(),t=this.calcExpences(),n=this.state,a=n.balance,r=n.transactions;return c.a.createElement("div",{className:T.a.dashboard},c.a.createElement(v,{onDeposit:this.onDeposit,onWithdraw:this.onWithdraw,balance:a}),c.a.createElement(S,{balance:a,income:e,expences:t}),c.a.createElement(I,{items:r}),c.a.createElement(h.a,{position:"bottom-right",autoClose:3e3}))}}]),t}(a.Component),N=function(){return c.a.createElement(W,null)};n(40);o.a.render(c.a.createElement(N,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.c539a834.chunk.js.map