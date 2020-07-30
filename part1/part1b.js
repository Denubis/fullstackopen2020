const x = 1
let y = 5

console.log(x,y)
y += 10
console.log(x,y)
y = "types? We don't need no stinkin types"
console.log(x,y)
//x = 4 

const t = [1, -1, 3]

const t2 = t.concat(5) //wait, we could push to a const. aaaaa

//t.push(5)

console.log(t2.length) //4 
console.log(t2[1]) // -1

t2.forEach(value => {
	console.log(value)
})//arrow function makes a much cleaner function def

const t3 = [1,2,3]
const m1 = t3.map(value => value * 2)
console.log(m1) // 2,4,6. => arrow function is a function def that takes param value, and returns (curly braces optional) value*2 for each element in classic map

const m2 = t3.map(value => '<li>' + value + '</li>')
console.log(m2)

//destructuring assignment

const t4 = [1,2,3,4,5]
const [first, second, ...rest] = t4 //ellipses are real

console.log(first, second)
console.log(rest)

const object1 = {
	name: 'Arto Hellas',
	age: 35,
	education: 'PhD',
}

const object2 = {
	name: 'Full stack web app dev',
	level: 'intermediate studies',
	size: 5 //can we leave terminal, off? yes
}

const object3 = {
	name: {
		first: 'Dan',
		last: 'Abramov',
	},
	grades: [2,3,5,3],
	department: 'Stanford Uni'
}

console.log(object1.name) //Arto Hellas
const fieldName = 'age'
console.log(object1[fieldName]) // 35

object1.address ='Helsinki'
object1['sekret number'] = 12341 //that's the number on my luggage!

const sum = (p1, p2) => {
	console.log(p1)
	console.log(p2)
	return p1+p2
}

const result = sum(1,5)
console.log(result)

const square = p => {
	console.log(p)
	return p * p
}

const squarer = p => p*p 

const t5 = [1,2,3]
const tSquared = t5.map(p=>p*p)
console.log(tSquared)

function product(a,b){
	return a*b
}

const result2 = product(2,6)
console.log(result2)

const average = function(a,b){
	return (a+b) /2
}

const result3 = average(2,5)
console.log(result3)