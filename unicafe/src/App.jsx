import Button from './Components/Button';
import Display from './Components/Display';

import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = (types) => {
    console.log("test ", types);
    setGood(good + 1);
  }

  const handleClickNeutral = (types) => {
    console.log("test ", types);
    setNeutral(neutral + 1);
  }

  const handleClickBad = (types) => {
    console.log("test ", types);
    setBad(bad + 1);
  }

  const title = 'Give feedback'
  const parts = [
    {
      name: 'Good',
      score: 6
    },
    {
      name: 'Neutral',
      score: 7
    },
    {
      name: 'Bad',
      score: 1
    },
    {
      name: 'All',
      score: 9
    },
    {
      name: 'Average',
      score: 14
    },
    {
      name: 'Positive',
      score: 14
    }
  ]  

  const Header = (props) => {
    return (
      <div>
        <h1>{props.title}</h1>
      </div>
    )
  }

  const Part = (props) => {
    return (
      <div>
        <p>{props.part} {props.types}</p>
      </div>
    )
  }


  const Content = (props) => {
    const allTypes = good + neutral + bad;
    const positiveTypes = good + neutral;
    console.log(typeof good, typeof neutral, typeof bad);
    console.log('allTypes:', allTypes, 'positiveTypes:', positiveTypes);

    return (
      <div>
        <Part part={parts[0].name} types={good}/> 
        <Part part={parts[1].name} types={neutral} />
        <Part part={parts[2].name} types={bad} />
        <Part part={parts[3].name} types={allTypes} />
        <Part part={parts[4].name} types={ (allTypes)/3 } />
        <Part part={parts[5].name} types={ positiveTypes/allTypes * 100 + "%" } />
      </div>
    )
  }

  // const ForTotal = (props) => {
  //   return (
  //     <div>
  //       <p>Number of score {props.score1 + props.score2 + props.score3 }</p>
  //     </div>
  //   )
  // }

  // const Total = (props) => {
  //   return (
  //     <div>
  //       <ForTotal score1={parts[0].score} score2={parts[1].score} score3={parts[2].score} />
  //     </div>
  //   )
  // }

  return (
    <div>
      <Header title="Give Feedback" />
      <Button handleClick={()=>handleClickGood("good")} text="good" />
      <Button handleClick={()=>handleClickNeutral("neutral")} text="neutral" />
      <Button handleClick={()=>handleClickBad("bad")} text="bad" />
      <Header title="Statistics"/>
      <Content />
    </div>
  )
}

export default App