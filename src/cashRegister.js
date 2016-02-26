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

function addItem(register, name, cost) {
  const item = {
    name: name,
    cost: cost
  }

  register.items.push(item)
}


function getTotal(register) {
  return register.items.reduce((prev, curr) => prev.cost + curr.cost)
}

//////////////////////////////////////////////////////////////////////////
// Usage

addItem(cashRegister, 'shoes', 50)
addItem(cashRegister, 'shirt', 15)

const total = getTotal(cashRegister)
console.log('Total is:', total)

cashRegister.items = without(cashRegister.items, 'name', 'shoes')
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
