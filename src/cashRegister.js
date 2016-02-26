// Utilities
const without = (arr, key, val) => arr.filter(item => item[key] !== val)

// Register
// {
//   items: [
//     { name: 'shirt', cost: 15 }
//   ]
// }
const cashRegister = {
  items: []
}

const addItem = (register, name, cost) => {
  const item = {
    name: name,
    cost: cost
  }

  register.items.push(item)
}

const getTotal = (register) => {
  return register.items.reduce((prev, curr) => prev + curr.cost, 0)
}

const removeItem = (register, itemName) => {
  return register.items = without(register.items, 'name', itemName)
}

//////////////////////////////////////////////////////////////////////////
// Usage

addItem(cashRegister, 'shoes', 50)
addItem(cashRegister, 'pants', 80)
addItem(cashRegister, 'shirt', 15)
addItem(cashRegister, 'gum', 5)

const total = getTotal(cashRegister)
console.log('Total is:', total)

removeItem(cashRegister, 'gum')
console.log(cashRegister)

// const registerList = []
//
// trackRegister(cashRegister, registerList)
// console.log(registerList)
//=> [ {...cashRegister } ]
//
// const totalAll = getTotalAll(registerList)
//
// console.log(totalAll)
//=> 1234 (the total of all items in all registers)

// console.log(cashRegister)
