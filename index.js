let money, time;

function start () {
  money = +promptMust("Ваш бюджет на месяц?", data => !isNaN(+data));
  // time = prompt("Введите дату в формате YYYY-MM-DD");
}

// start()

let appData = {
  budget: parseFloat(money),
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true,
  chooseExpenses: function() {
    for (let i = 0; i < 2; ) {
      promptOption(`Введите ${i+1}-ую обязательную статью расходов в этом месяце`, (expensesName) => {
        promptOption('Во сколько обойдется?', (expensesMoney) => {
          if (!isNaN(expensesMoney)) {
            appData.expenses[expensesName] = parseFloat(expensesMoney);
            i++
          }
        })
      })
    }
  },
  dayBudget: function() {
    appData.moneyPerDay = Math.round(appData.budget / 30)
    alert('Бюджет на один день: ' + appData.moneyPerDay)
  },
  checkSavings: function() {
    if (appData.savings == true) {
     let save = +prompt('Какова сумма накоплений?')
     let persent = +prompt('Под какой процент?')
     appData.monthIncome = Math.round(save/12/100*persent)
     alert('Доход в месяц с депозита: ' +  appData.monthIncome)
    }
  },
  chooseOptExpenses: function() {
    for (let i = 1; i < 4; i++) {
      let optExpensesName = prompt("Статья необязательных расходов?")

      if (typeof(optExpensesName) != null && optExpensesName != '') {
        console.log('done')
        appData.optionalExpenses[i] = optExpensesName;
      } else {
        i--
      }
    }
  },
  chooseIncome: function() {

    let items = promptMust('Перечислите через запятую виды дополнительного дохода', items => isNaN(items));
    appData.income = items.split(',').map(i => i.trim())
    promptOption('может что-то еще?', moreItems => appData.income.push(...moreItems.split(',').map(i => i.trim())))
    appData.income.sort()

    // перебор через forEach
    // let messageLines = ["Способы доп. заработка: "]
    // appData.income.forEach((item, i) => {
    //   messageLines.push(`${i+1}: ${item} `)
    // })
    // alert(messageLines.join('\n'))

      // перебор через map
    let messageLines = [
      "Способы доп. заработка: ",
      ...appData.income.map((item, i) => `${i+1}: ${item}`)
    ]
    alert(messageLines.join('\n'))
  }
}

  function printAppData() {
    console.log('Наша программа включает в себя данные: ')
    for (let i in appData) {
      if (typeof appData[i] == 'function'){
        continue
      }
      console.log(i, appData[i])
    }
  }

// promptOption спросит у пользователя title, и вызовет callback в случае, если пользователь что-то введет
function promptOption(title, callback) {
  let data = prompt(title)

  if (data !== '' && data !== null) {
    callback(data);
  }
}

// Спросит у пользователя title, и будет спрашивать до тех пор, пока пользователь что-то не введет
function promptMust(title, checkFn) {
  // let data = prompt(title);
  //
  // первый способ проверить на тип
  // if (type == "number" && isNaN(+data)) {
  //   return +data;
  // }
  // аналогично для других типов
  // if (type == "string" && data != null) {
  //   return data;
  // }
  // if (type == "array" && data != null && data.trim().length > 0) {
  //   return data.split(',').map(i => i.trim());
  // }

  // второй метод через вызов функции проверки
  // let data = prompt(title);
  // if (data != '' && data != null) {
  //   if (typeof checkFn == "function") {
  //     if (checkFn(data)) {
  //       return data;
  //     }
  //     // other logic when fail
  //     continue;
  //   }
  //   return data;
  // }
  while (true) {
    let data = prompt(title);

    if (data != '' && data != null) {
      if (typeof checkFn == "function") {
        if (checkFn(data)) {
          return data;
        }
        continue;
      }
      return data;
    }
  }
}
// promptMust("Перечислите через запятую виды дополнительного дохода", "array")
// promptMust("Перечислите через запятую виды дополнительного дохода", data => isNaN(+data))
// promptMust("Перечислите через запятую виды дополнительного дохода")
