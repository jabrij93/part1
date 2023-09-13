import Button from './Components/Button';
import Display from './Components/Display';
import './StatisticLine.css';

import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [vote, setVote] = useState(0)

  const handleClickGood = (types) => {
    console.log(types);
    setGood(good + 1);
  }

  const handleClickNeutral = (types) => {
    console.log(types);
    setNeutral(neutral + 1);
  }

  const handleClickBad = (types) => {
    console.log(types);
    setBad(bad + 1);
  }

  const title = 'Give feedback'
  const parts = [
    {
      name: 'Good',
    },
    {
      name: 'Neutral',
    },
    {
      name: 'Bad',
    },
    {
      name: 'All',
    },
    {
      name: 'Average',
    },
    {
      name: 'Positive',
    }
  ]  

  const Header = (props) => {
    return (
      <div>
        <h1>{props.title}</h1>
      </div>
    )
  }

  const StatisticLine = (props) => {

    return (
      <div>
        <table className="statisticLineTable">
          <tr>
            <td className="part">{props.part}</td>
            <td className="types">{props.types}</td>
          </tr>
        </table>
      </div>
    )
  }

  const Content = (props) => {
    const allTypes = good + neutral + bad;
    const positiveTypes = good + neutral;

    if (allTypes === 0) {
      return <div>No feedback given</div>;
    }

    return (
      <div>
        <StatisticLine part={parts[0].name} types={good}/> 
        <StatisticLine part={parts[1].name} types={neutral} />
        <StatisticLine part={parts[2].name} types={bad} />
        <StatisticLine part={parts[3].name} types={allTypes} />
        <StatisticLine part={parts[4].name} types={ (allTypes)/3 } />
        <StatisticLine part={parts[5].name} types={ allTypes !== 0 ? (positiveTypes/allTypes * 100) + "%" : 0 } />
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