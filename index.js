let money = prompt("Ваш бюджет на месяц?")
let time = prompt("Введите дату в формате YYYY-MM-DD")
let expensesName = prompt("Введите обязательную статью расходов в этом месяце")
let expensesMoney = prompt("Во сколько обойдется?")
let expensesName2 = prompt("Введите обязательную статью расходов в этом месяце")
let expensesMoney2 = prompt("Во сколько обойдется?")
let appData = {
  budget: parseFloat(money),
  timeData: time,
  expenses: {
    [expensesName]: parseFloat(expensesMoney),
    [expensesName2]: parseFloat(expensesMoney2),
  },
  optionalExpenses: {},
  income: [],
  savings: false
}

alert(appData.budget / 30)