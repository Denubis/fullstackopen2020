import React from 'react'
import ReactDOM from 'react-dom'

// () is shorthand for {return ()}
// const App = () => {
// 	console.log('Hello from component')
// 	return (
// 		<div>
// 		<p>Hello world</p>
// 		</div>
// 	)
// }

// const App = () => {
// 	const now = new Date()
// 	const a = 10
// 	const b = 20

// 	return (
// 		<div>
// 		<p>Hello world, it is {now.toString()} </p>
// 		<p>
// 			{a} plus {b} is {a + b}
// 		</p>
// 	</div>
// 	)
// }


// //Beware the assignment arrow => It is hard to not see when debugging.
// const App = () => {
// 	const now = new Date()
// 	const a = 10
// 	const b = 20

// 	return React.createElement(
// 		'div',
// 		null,
// 		React.createElement(
// 			'p', null, 'Hello world, it is ', now.toString()
// 		),
// 		React.createElement(
// 			'p', null, a, ' plus ', b, ' is ', a + b
// 		)
// 	)
// }

// component names must have initial cap!
const Hello = (props) => (
	<div>
	<p>Hello {props.name}, you are {props.age} years old</p>
	</div>
)


const Footer = () => {
	return (
		<div>
		Greeting app created by blah
		</div>
	)
}


const App = () => {
	const name = 'Peter'
	const age = 10 
	return (
	<>
	<h1>Greetings</h1>
	<Hello name='Maya' age={26+10}/>
	<Hello name={name} age={age}/>
	<Footer/>
	</>
	)
}
//Be careful with Id not ID
//ReactDOM.render(<App />, document.getElementById('root'))
ReactDOM.render(
	React.createElement(App, null),
	document.getElementById('root')
)