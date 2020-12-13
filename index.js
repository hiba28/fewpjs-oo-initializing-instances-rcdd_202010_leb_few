// Write your code here
class Breakfast{
  constructor(food, drink){
    this.food = food
    this.drink = drink
  }
}
class Lunch{
  constructor(salad,soup,drink){
    this.salad = salad
    this.soup = soup
    this.drink = drink
  }
}
class Dinner{
  constructor(salad, soup, entree, dessert){
    this.salad = salad
    this.soup = soup
    this.entree = entree
    this._dessert = dessert
  }
}
let breakfast = new Breakfast("oats","coffee")
let lunch = new Lunch("salad",'soup','water')
let dinner = new Dinner('salad','soup','entree','chocolate cake')

console.log(`i will have for breakfast ${breakfast} , about the lunch i'll take ${lunch}, and for the dinner lemme choose ${dinner}`)
