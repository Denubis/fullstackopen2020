import React, { useState } from 'react';
import ReactDOM from 'react-dom';


// Desttructuring and helper funcs

// const Hello = ({name, age}) => {

// 	// These are the pre-destructuring era defs
// 	// const name = props.name
// 	// const age = props.age

// 	// We don't even have to write this here... 
// 	//const {name, age} = props

// 	// const bornYear = () => {
// 	// 	const yearNow = new Date().getFullYear()
// 	// 	return yearNow - props.age
// 	// }

// 	const bornYear = () => new Date().getFullYear() - age

// 	return (
// 	        <div>
// 	        <p>
// 	        Hello {name}, you are {age} years old
// 	        </p>
// 	        <p>So you were probably born in {bornYear()}</p>
// 	        </div>
// 	)
// }


// const App = () => {
// 	const name = 'Peter'
// 	const age = 10

// 	return (
// 	        <div>
// 	        <h1>Greetings </h1>
// 	        <Hello name="Maya" age={26+10}/>
// 			<Hello name={name} age={age}/>
// 			</div>
// 		)
// }
//ReactDOM.render(<App />, document.getElementById('root'))
const Display = ({counter}) => <div>{counter}</div>

const Button = ({text, handleClick}) => (
	        <button onClick={handleClick}>
	        {text}
	        </button>
	        )

const App = (props) => {
	//const {counter} = props
	const [ counter, setCounter ] = useState(0)
	//I don't think the whitespace matters...

	// const handleClick = () => {
	// 	console.log('clicked')
	// }

	// setTimeout(
	//            ()=> setCounter(counter + 1),
	//            1000
	//            )
	const increaseByOne = () => setCounter(counter + 1)
	const decreaseByOne = () => setCounter(counter - 1)
	const setToZero = () => setCounter(0)

		return (
	        <div>
	        	<Display counter={counter}/>
	        	<Button
	        		handleClick={increaseByOne}
	        		text='plus'
	        	/>
	        	<Button
	        		handleClick={setToZero}
	        		text='zero'
	        	/>
	        	<Button
	        		handleClick={decreaseByOne}
	        		text='minus'
	        	/>
			</div>
	        )
}

//let counter = 1

//doesn't persist
//counter += 1

ReactDOM.render(
                <App/>,
                document.getElementById('root'))

// const refresh = () => {

// 	ReactDOM.render(
//                 <App counter={counter} />,
//                 document.getElementById('root')
//                 )
// }

// refresh()
// counter += 1
// refresh()
// counter += 1
// refresh()

// setInterval(//Anonymous function
//             () => {
// 	refresh()
// 	counter +=1 
// }, 1000)