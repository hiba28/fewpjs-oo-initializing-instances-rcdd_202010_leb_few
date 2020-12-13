// Write your code here
class Breakfast{
  constructor(food, drink){
    this.food = food
    this.drink = drink
  }
  listBreakfast(){
    return `${this.food} + ${this.drink}`
  }
}
class Lunch{
  constructor(salad,soup,drink){
    this.salad = salad
    this.soup = soup
    this.drink = drink
  }
  listLunch(){
    return `${this.salad} + ${this.soup} + ${this.drink}`
  }
}
class Dinner{
  constructor(salad, soup, entree, dessert){
    this.salad = salad
    this.soup = soup
    this.entree = entree
    this._dessert = dessert
  }
  listDinner(){
    this._dessert = "cake"
    return `${this.salad} + ${this.soup} + ${this.entree} + ${this._dessert}`
  }
}
let breakfast = new Breakfast("oats","coffee")
let lunch = new Lunch("salad",'soup','water')
let dinner = new Dinner('salad','soup','entree','')

console.log(`i will have for breakfast ${breakfast.listBreakfast()} , about the lunch i'll take ${lunch.listLunch()}, and for the dinner lemme choose ${dinner.listDinner()}`)
