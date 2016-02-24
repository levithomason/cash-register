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

// {
//   items: [
//     { name: 'shoes', cost: 50 },
//     { name: 'shirt', cost: 15 }
//   ]
// }

function getTotal(register) {
  return register.items.reduce((prev, curr) => prev.cost + curr.cost)
}

//////////////////////////////////////////////////////////////////////////
// Usage

addItem(cashRegister, 'shoes', 50)
addItem(cashRegister, 'shirt', 15)

const total = getTotal(cashRegister)
console.log('Total is:', total)

// Next functionality
//
// removeItem(cashRegister, name)
// console.log(cashRegister.items) //=> array without the item 'name' above
//
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

console.log(cashRegister)
