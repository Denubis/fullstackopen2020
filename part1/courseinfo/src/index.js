import React from 'react'
import ReactDOM from 'react-dom'

// 3 minutes

// Unfortunately, the entire application is in the same component. Refactor the code so that it consists of three new components: Header, Content, and Total. All data still resides in the App component, which passes the necessary data to each component using props. Header takes care of rendering the name of the course, Content renders the parts and their number of exercises and Total renders the total number of exercises.


const Total = (props) => (
	<p> Number of exercises {props.exercises1 + props.exercises2 + props.exercises3} </p>
)

const Header = (props) => (
	<h1>{props.course}</h1>
	
) 
//h1 is a block element, so it can live happily there.

//this really should have a content-line or be called 3 times. But going to follow the spec.
// Hah, anticipated step 2

const Part = (props) => (
	<div>
		<p>{props.part} {props.exercise}</p>
	</div>
)

const Content = (props) => (
	<div>
		<Part part={props.part1}
		      exercise={props.exercises1}/>
		<Part part={props.part2}
		      exercise={props.exercises2}/>
		<Part part={props.part3}
		      exercise={props.exercises3}/>		      
	</div>
) //p are inline, thus needing their own wrapping. Could use empty tags, but it mucks up subl3's syntax formatting and I don't want to debug it right now.

const App = () => {
	const course = 'Half Stack application development'
	const part1 = 'Fundamentals of React'
	const exercises1 = 10
	const part2 = 'Using props to pass data'
	const exercises2 = 7
	const part3 = 'State of a component'
	const exercises3 = 14

	return (
		<div>
			<Header course={course}/>
			<Content part1={part1}
					 part2={part2}
					 part3={part3}
					 exercises1={exercises1}
					 exercises2={exercises2}
					 exercises3={exercises3} />
			<Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
		</div>
	)

}

ReactDOM.render(<App />, document.getElementById('root'))