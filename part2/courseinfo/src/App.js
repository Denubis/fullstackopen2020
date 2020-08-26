import React from 'react'

// It's kinda silly moving all of this from index into App, but I suspect we're going to
// refactor at some point, and I should probably get the assignment done first.
//

const Course = ({course}) => {

  return (
    <div>
      <Header course={course}/>
      <Content course={course}/>
      <Total course={course}/>
    </div>
  )
}

const Total = (props) => {
    const sumExercises = props.course.parts.reduce((totalExercisesSum, exercise)=>totalExercisesSum + exercise['exercises'], 0) //Don't forget that trailing 0, which looks like a getter with default value. Also, don't need to map out the variable first. Hard getting my head around this lambda function, but ok... yeah, I see it.

    return(
		<p> Number of exercises {sumExercises} </p>
	)
}
const Header = (props) => (
	<h1>{props.course.name}</h1>
)

const Part = (props) => (
	<div>
		<p>{props.part['name']} {props.part['exercises']}</p>
	</div>
)

const Content = (props) => {
	console.log(props)
	const PartsMap = props.course.parts.map(value =>
		<Part key={value.id} part={value}/>
    // Hah, and this is why we don't prematurely optimise. It's almost like this unit was designed with this in mind...
	)
	return (
		<div>

			{PartsMap}

		</div>
	)
}


const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      // Testing for no hardcoding
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App;
