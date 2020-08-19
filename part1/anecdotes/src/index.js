import React, { useState } from 'react'
import ReactDOM from 'react-dom'


// 1.12*: anecdotes step1 
// The world of software engineering is filled with
// anecdotes that distill timeless truths from our field into short
// one-liners.

// Expand the following application by adding a button that can be clicked to
// display a random anecdote from the field of software engineering:

// https://stackoverflow.com/a/12646864
// But since there's useState(0), we're just going to pull const j = Math.floor(Math.random() * (i + 1)); from it


// 1.13*: anecdotes step2
// Expand your application so that you can vote for the displayed anecdote.

const Button = ({text,handleClick}) =><button onClick={handleClick}>{text}</button>
const Header1 = ({text}) => <h1>{text}</h1>
// ^ This seems silly?

const App = (props) => {
  const [selected, setSelected] = useState(0)
  // https://stackoverflow.com/a/20222538
  // We need to *initialise* as empty. Tricky.
  const [points, setPoints] = useState(Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf,0))

  console.log(points)


  const RandomAnecdote = () => {
	const ancedoteNumber = Math.floor(Math.random() * (anecdotes.length))
	
	
	console.log("rolled", ancedoteNumber)
	setSelected(ancedoteNumber)
 	// This doesn't work, because it's running at the end of the render, not the start of next
	// MaxAnecdote()
  }

  const MaxAnecdote = () => {
	// we need to find the index of the maximum array element without using let?
	//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
  	console.log("max points", points)
  	const maxValue = Math.max(...points)
  	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
  	// argh, this is doing my head in. I am not a functional programmer
  	const maxIndex = points.findIndex((value) => {
  		if (value === maxValue) {
  			return true
  		}
  		return false
  	})
  	console.log("maxes", maxValue, maxIndex)
//  	setMax(maxIndex)
// I think we need to return this only after we compute... 
// Ah, follow the pattern of conditional rendering, rather than setters. Ok... 
  	return (
  	        <div>
  	        <div>      {props.anecdotes[maxIndex]} </div>
		    	<div>has {points[maxIndex]} votes</div>
		    	</div>
  	        )

  }
  // Ooooow, my brain. We're going to grab selected from local context instead of passing it in
  // This... does not seem right?


  const Vote = () => {
  	console.log("Before", points)
  	const copy = [...points]
  	copy[selected] += 1
  	setPoints(copy)
  	console.log("after", points)
  	// This doesn't work, because it's running at the end of the render, not the start of next
  	//MaxAnecdote()
  }

  return (
    <div>
    <Header1 text="Ancedote of the day"/>
    	<div>      {props.anecdotes[selected]}</div>
    	<div>has {points[selected]} votes</div>

      <Button handleClick={Vote} text="vote"/><Button handleClick={RandomAnecdote} text="next ancedote"/>
          <Header1 text="Ancedote with the most votes"/>
          <MaxAnecdote/>

    </div>

  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)