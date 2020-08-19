import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// const App = (props) => {
// 	// I don't understand [ ] or {} for deconstructing
// 	// const [left, setLeft] = useState(0)
// 	// const [right, setRight] = useState(0)

// 	const [clicks, setClicks] = useState({
// 		left: 0,
// 		right: 0
// 	})

// 	// const handleLeftClick = () => {
// 	// 	const newClicks = {
// 	// 		...clicks,
// 	// 		left: clicks.left + 1
// 	// 	}
// 	// 	setClicks(newClicks)
// 	// }

// 	// const handleRightClick = () => {
// 	// 	const newClicks = {
// 	// 		...clicks,
// 	// 		right: clicks.right + 1
// 	// 	}
// 	// 	setClicks(newClicks)
// 	// }

// 	const handleLeftClick = () => setClicks({ ...clicks, left: clicks.left + 1})
// 	const handleRightClick = () => setClicks({...clicks, right: clicks.right +1})
// 	return (
// 	        <div>
// 	        	<div>
// 	        		{clicks.left}
// 	        		<button onClick={handleLeftClick}>
// 	        			left
// 	        		</button>
// 	        		<button onClick={handleRightClick}>
// 	        			right
// 	        		</button>
// 	        		{clicks.right}
// 	        	</div>
// 	        </div>
// 	       )
// }


////////////////////////////
// Handling Arrays
////////////////////////////

// const History = (props) => {
// 	if (props.allClicks.length === 0){
// 		return (
// 		        <div>the app is used by pressing buttons</div>
// 		        )
// 	}
// 	return (
// 	        <div>button history: {props.allClicks.join(' ')}
// 			</div>
// 			)
// }

// const Button = (props) =>	{
// 	console.log('text', props)
// 	const {onClick, text} = props
// 	//debugger
// 	return (
// 	<button onClick={onClick}>
// 		{text}
// 	</button>
// )
// }

// const App = (props) => {
// 		const [left, setLeft] = useState(0)
// 		const [right, setRight] = useState(0)
// 		const [allClicks, setAll] = useState([])


// 		// OHHHhhh, use state returns the variable, and then the setter
// 		const handleLeftClick = () => {
// 			setAll(allClicks.concat('L'))
// 			setLeft(left + 1)
// 		}

// 		const handleRightClick = () => {
// 			setAll(allClicks.concat('R'))
// 			setRight(right+1)
// 		}

// 		return (
// 				<div><div>
// 				{left}
// 				<Button onClick={handleLeftClick} text='left' />
// 				<Button onClick={handleRightClick} text='Right' />
// 				{right}
// 				<History allClicks={allClicks}/>
// 				</div></div>
// 		        )
// }


//////////////////////
// Event Handling, function retr function (can we stop hardcoding left and right plz?)
//////////////////////

const Button = (props) => (
                           <button onClick={props.handleClick}>
                            {props.text}
                           </button>
                           )
const Display = props => <div>{props.value}</div>
const App = (props) => {
	const [value, setValue] = useState(10)

	// Yeah, nah. This is terse to the point of what's going on?
	const hello = (who) => () => {
		console.log('hello', who)
	}
	
	const setToValue = (newValue) => () => {
		setValue(newValue)
	}
	// function constructor function, which makes an anonymous function () => {blah} as a return of (newvalue) =>
	// Ok, I can see this as a common pattern, since this is effectively a function-call with a bit more setup.
	

	return (
	        <div>
			<Display value={value}/>
			<Button handleClick={setToValue(1000)} text="thousand"/>
			<Button handleClick={setToValue(0)} text="zero"/>
			<Button handleClick={setToValue(value + 1 )} text="+"/>
			</div>
	        )
}

ReactDOM.render(
                <App/>,
                document.getElementById('root'))

