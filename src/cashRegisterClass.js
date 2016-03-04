class CashRegister {
  static instances = []

  static getTotalAll() {
    return CashRegister.instances.reduce((prev, curr) => prev + curr.getTotal(), 0)
  }

  constructor() {
    // track the current register instance in the static list of instances
    CashRegister.instances.push(this)
  }

  items = []

  addItem(name, cost) {
    this.items.push({ name, cost })
  }

  removeItem(name) {
    // return true (keep) every item whose name doesn't match
    this.items = this.items.filter((item) => item.name !== name)
  }

  getTotal() {
    return this.items.reduce((prev, curr) => prev + curr.cost, 0)
  }
}

////////////////////////////////////////////

const registerA = new CashRegister()
const registerB = new CashRegister()
const registerC = new CashRegister()

console.log('Instances:', CashRegister.instances)

registerA.addItem('shoes', 50)
registerA.addItem('pants', 80)

registerB.addItem('shirt', 15)
registerB.addItem('gum', 5)

registerC.addItem('toys', 75)
registerC.addItem('bananas', 2)
console.log('A items:', registerA.items)
console.log('B items:', registerB.items)

console.log('Total:', registerA.getTotal())

registerA.removeItem('shoes')
console.log('Items (remove):', registerA.items)

console.log('Total All:', CashRegister.getTotalAll())
