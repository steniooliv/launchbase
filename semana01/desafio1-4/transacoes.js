//
//  PROGRAMA PARA REALIZAR OPERAÇÕES BANCÁRIAS
//

const user = {

  name: "Mariana",
  transactions: [],
  balance: 0,
}

function createTransaction(transaction) {

  if (transaction.type == "credit"){

    user.balance = user.balance + transaction.value;
  }
  else {

    user.balance = user.balance - transaction.value;
  }

  user.transactions.push(transaction);
}


function getHigherTransactionByType(type) {

  let higherTransaction = 0;
  let higherValue = 0;

  for (transaction of user.transactions) {

    if (transaction.type == type && transaction.value > higherValue ) {

      higherValue = transaction.value;
      higherTransaction = transaction;
    }
  }
  
  return higherTransaction;
}

function getAverageTransactionValue() {
  
  let sum = 0;
  
  for (transaction of user.transactions) {

    sum = sum + transaction.value;
  }

  return sum / user.transactions.length;
}

function getTransactionsCount() {
  let count = {credit: 0, debit: 0}
  
  for (let transaction of user.transactions) {

    if (transaction.type == "credit") {

      count.credit++;
    }
    else {

      count.debit++;
    }
  }
  
  return count;
}


createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });


console.log(user.balance);

console.log(getHigherTransactionByType("credit"));

console.log(getHigherTransactionByType("debit"));

console.log(getAverageTransactionValue());

console.log(getTransactionsCount());