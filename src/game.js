class Player {
  constructor(name) {
    this.name = name
    this.life = 100
  }

  hit(enemy) {
    const power = 5
    console.log(`${me.name} hits ${enemy.name}! -${power}`)
    enemy.takeDamage(power)
  }

  kick(enemy) {
    const power = 10
    console.log(`${me.name} kicks ${enemy.name}! -${power}`)
    enemy.takeDamage(power)
  }
}

class Enemy {
  constructor(name) {
    this.name = name
    this.life = 30
  }

  takeDamage(power) {
    this.life -= power
    console.log(`${this.name} took ${power} damage! (life ${this.life})`)
    if (this.life <= 0) this.die()
  }

  die() {
    console.log(`${this.name} is dead!`)
  }
}

const me = new Player('Levi')
const badGuy = new Enemy('Hitler')

console.log('---------------------------')
console.log('START GAME!')
console.log(me)
console.log(badGuy)
console.log('---------------------------')

me.hit(badGuy)
me.kick(badGuy)
me.kick(badGuy)
me.hit(badGuy)
