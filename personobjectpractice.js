// Create a person constructor that has 3 properties and extend the constructors prototype to have 3 methods
// - then create three person objects

function Person(x,y,z){
  this.height = x;
  this.eyeColor = y;
  this.hair = z;

  this.wakeUp = function(){
    console.log("Good Morning!")
  }
  this.takeShower = function(){
    console.log("Getting Clean")
  }
  this.walkDog = function(){
    console.log("Don't forget pooper scooper")
  }
}
// new is a keyword and is essential with constructors
var kelly = new Person("5'11","brown","natural");
var danny = 

Person.prototype.tattoo = true;
