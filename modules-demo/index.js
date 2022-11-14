const {area,perimeter} = require('./square')
const shape = require('./shape')

console.log("The area of the square of length 5 is ",area(5))
console.log("The perimeter of the square of length 5 is ",perimeter(5))

const myShape = new shape("Hexagon", 6)
myShape.info()
