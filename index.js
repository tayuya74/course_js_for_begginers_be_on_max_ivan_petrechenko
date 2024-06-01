let money, time;

function start () {
  money = +prompt("Ваш бюджет на месяц?");
  time = prompt("Введите дату в формате YYYY-MM-DD");  

  while(isNaN(money) || money == '' || money == null) {
    money = +prompt("Ваш бюджет на месяц?");
  }
}

start()

let appData = {
  budget: parseFloat(money),
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true
}

function expenses() {
  for (let i = 0; i < 2; i++) {
    let expensesName = prompt("Введите обязательную статью расходов в этом месяце")
    let expensesMoney = prompt("Во сколько обойдется?")
    
    if (typeof(expensesName) != null && typeof(expensesMoney) != null
    && expensesName != '' && expensesMoney != '') {
      console.log('done')
      appData.expenses[expensesName] = parseFloat(expensesMoney);
    } else {
      i--
    }
  }
}
expenses()

function dayBudget() {
  appData.moneyPerDay = Math.round(appData.budget / 30)
  alert('Бюджет на один день: ' + appData.moneyPerDay)
}
dayBudget()


function checkSavings() {
   if (appData.savings == true) {
    let save = +prompt('Какова сумма накоплений?')
    let persent = +prompt('Под какой процент?')
    appData.monthIncome = Math.round(save/12/100*persent)
    alert('Доход в месяц с депозита: ' +  appData.monthIncome)
   }
}
checkSavings()

function optionalExpenses() {
  for (let i = 1; i < 4; i++) {
    let optExpensesName = prompt("Статья необязательных расходов?")
    
    if (typeof(optExpensesName) != null && optExpensesName != '') {
      console.log('done')
      appData.optionalExpenses[i] = optExpensesName;
    } else {
      i--
    }
  }
}
optionalExpenses()

console.log(appData)

