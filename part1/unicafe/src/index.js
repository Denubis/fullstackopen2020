import React, { useState } from 'react';
import ReactDOM from 'react-dom';


// 1.6: unicafe step1
// Like most companies, Unicafe collects feedback from its customers. 
// Your task is to implement a web application for collecting customer feedback. 
// There are only three options for feedback: good, neutral, and bad.

// The application must display the total number of collected feedback for each category. 
// Your final application could look like this:
// # give feedback
// btns: good, neutral, bad
// # statistics
// good {good}
// netural {neutral}
// bad {bad}
//Note that your application needs to work only during a single browser session. Once you refresh the page, the collected feedback is allowed to disappear.
//You can implement the application in a single index.js file. You can use the code below as a starting point for your application.


// 1.7: unicafe step2
// Expand your application so that it shows more statistics about the gathered
// feedback: the total number of collected feedback, the average score (good: 1,
// neutral: 0, bad: -1) and the percentage of positive feedback.

const Header1 = ({header}) => <h1>{header}</h1>
const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>
const DisplayStat = ({stat, text}) => <div>{text} {stat}</div>

const App = () => {
  // save clicks of each button to own state
  // make sure this is in the thingo declaration
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  

  const incrementGood = () => setGood(good + 1)
  const incrementNeutral = () => setNeutral(neutral + 1)
  const incrementBad = () => setBad(bad + 1)

  const total = (good+neutral+bad)

  return (
    <div>
      <Header1 header="Give feedback"/>
      <Button handleClick={incrementGood} text="good"/>
      <Button handleClick={incrementNeutral} text="neutral"/>
      <Button handleClick={incrementBad} text="bad"/>
      <Header1 header="Statistics"/>
      <DisplayStat stat={good} text="good"/>
      <DisplayStat stat={neutral} text="neutral"/>
      <DisplayStat stat={bad} text="bad"/>
      <DisplayStat stat={total} text="all"/>
      <DisplayStat stat={(good+bad*-1)/(total)} text="average"/>
      <DisplayStat stat={(good/(total))+" %"} text="positive"/>


    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)