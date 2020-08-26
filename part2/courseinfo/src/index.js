import React from 'react'
import ReactDOM from 'react-dom'

// 3 minutes

// Unfortunately, the entire application is in the same component. Refactor the code so that it consists of three new components: Header, Content, and Total. All data still resides in the App component, which passes the necessary data to each component using props. Header takes care of rendering the name of the course, Content renders the parts and their number of exercises and Total renders the total number of exercises.

// start 1.3 at 12:30
// end 1.3 at 12:37 with slack interruptions.

// start 1.4 at 10:33
// end 1.4 at 10:55, but forays into map-reduce are way outside scope of 1.4? Been a LONG time since I worked with this paradigm.

//NB at this point you can assume that there are always three items, so there is no need to go through the arrays using loops. We will come back to the topic of rendering components based on items in arrays with a more thorough exploration in the next part of the course. 

// No, sorry, that's stupid. I'm going to use loops.

// start 1.5 at 13:48 (some weeks later)
// 1.5: course information step5
// Let's take the changes one step further. Change the course 
// and its parts into a single JavaScript object. Fix everything that breaks.
// end 1.5 at 13:52

const Total = (props) => {
    //const exercises = props.parts.map(value => value['exercises'])
    const sumExercises = props.course.parts.reduce((totalExercisesSum, exercise)=>totalExercisesSum + exercise['exercises'], 0) //Don't forget that trailing 0, which looks like a getter with default value. Also, don't need to map out the variable first. Hard getting my head around this lambda function, but ok... yeah, I see it.

    // I've got a feeling that this is 1.5? Ah, this is some future chapter. Going to do this "right" anyways. 
	// https://stackoverflow.com/questions/54121602/displaying-the-sum-of-values-in-react-jsx/54121633 (The other site I saw looked like it was using this framework, and if I just saw the answer it wouldn't bloody be a useful learning experience.)


    return(
		<p> Number of exercises {sumExercises} </p>
	)
}
const Header = (props) => (
	<h1>{props.course.name}</h1>
)

//h1 is a block element, so it can live happily there.

//this really should have a content-line or be called 3 times. But going to follow the spec.
// Hah, anticipated step 2


//We continue building the application that we started working on in the previous exercises. You can write the code into the same project, since we are only interested in the final state of the submitted application.

//Let's move forward to using objects in our application. Modify the variable definitions of the App component as follows and also refactor the application so that it still works:



// 1.5 Here, because we're calling this from content, we don't need to address the new datastructure
const Part = (props) => (
	<div>
		<p>{props.part['name']} {props.part['exercises']}</p>
	</div>
)

const Content = (props) => {
	console.log(props)
	const PartsMap = props.course.parts.map(value =>
		<Part part={value}/>
	) //Going to ignore this warning for now. 
	// https://reactjs.org/docs/reconciliation.html#keys Yeeep. Not my problem. No premature optimisation.
	return (
		<div>

			{PartsMap}

		</div>
	)
}


//p are inline, thus needing their own wrapping. Could use empty tags, but it mucks up subl3's syntax formatting and I don't want to debug it right now.


// old App consts removed. In version history

// And then place the objects into an array. Modify the variable definitions of App into the following form and modify the other parts of the application accordingly:



const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

    return (
    <div>
      <Header course={course}/>
      <Content course={course}/>
      <Total course={course}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))