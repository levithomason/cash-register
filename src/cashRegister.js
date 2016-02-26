// Utilities
const without = (arr, key, val) => arr.filter(item => item[key] !== val)

// Register
const registerList = []
const registerA = { items: [] }
const registerB = { items: [] }

const addItem = (register, name, cost) => {
  const item = {
    name: name,
    cost: cost
  }

  register.items.push(item)
}

const getTotal = (register) => {
  return register.items.reduce((prev, curr) => {
    return prev + curr.cost
  }, 0)
}

const removeItem = (register, itemName) => {
  return register.items = without(register.items, 'name', itemName)
}

const trackRegister = (register, list) => list.push(register)

const getTotalAll = (list) => {
  return list.reduce((prev, curr) => {
    return prev + getTotal(curr)
  }, 0)
}

//////////////////////////////////////////////////////////////////////////
// Usage

addItem(registerA, 'shoes', 50)
addItem(registerA, 'pants', 80)
addItem(registerB, 'shirt', 15)
addItem(registerB, 'gum', 5)
console.log('A items:', registerA)
console.log('B items:', registerB)

console.log('--------------------------------------------')

console.log('Total A:', getTotal(registerA))
console.log('Total B:', getTotal(registerB))

console.log('--------------------------------------------')

removeItem(registerA, 'shoes')
removeItem(registerB, 'gum')
console.log('remove shoes:', registerA)
console.log('remove gum:', registerB)

console.log('--------------------------------------------')

trackRegister(registerA, registerList)
trackRegister(registerB, registerList)
console.log('tracked registers:', registerList)

console.log('--------------------------------------------')

const totalAll = getTotalAll(registerList)
console.log('Total All:', totalAll)
