import React from 'react'


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
    const sumExercises =
      props.course.parts.reduce((totalExercisesSum, exercise) =>
        totalExercisesSum + exercise['exercises'], 0
      ) //Don't forget that trailing 0, which looks like a getter with default value. Also, don't need to map out the variable first. Hard getting my head around this lambda function, but ok... yeah, I see it.

    return(
		<p> <b>total of {sumExercises}  exercises</b> </p>
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

export default Course
