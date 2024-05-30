let money = +prompt("Ваш бюджет на месяц?")
let time = prompt("Введите дату в формате YYYY-MM-DD")
let expensesName = prompt("Введите обязательную статью расходов в этом месяце")
let expensesMoney = prompt("Во сколько обойдется?")

let appData = {
  budget: parseFloat(money),
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
}

for (let i = 1; i < 2; i++) {
  let expensesName = prompt("Введите обязательную статью расходов в этом месяце")
  let expensesMoney = prompt("Во сколько обойдется?")
  
  if (typeof(expensesName) != null && typeof(expensesMoney) != null
  && expensesName != '' && expensesMoney != '') {
    console.log('done')
    appData.expenses[expensesName] = parseFloat(expensesMoney);
  } else {}

}

appData.moneyPerDay = Math.round(appData.budget / 30)
alert('Бюджет на один день: ' + appData.moneyPerDay)


