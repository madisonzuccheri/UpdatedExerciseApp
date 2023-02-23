// import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import Stopwatch from './components/DurationExercise';
import Counting from './components/RepetitionExercise';
import Weights from './components/Weights';
 const timing = [
  {name: "Running"},
 ];
 const reps = [
  {name: "Squats"}
 ];
 const press = [
  {name: "Bench Press"}
 ];

 export default function App(startTime, setStartTime){
  let [currentCount, setCurrentCount] = useState(0)
  let [displayComponents, setDisplayComponent] = useState(-1)
  let [currentCounting, setCurrentCounting] = useState(0)

  let components = [
    <Stopwatch name={<>{timing.map(({name}) => (<h2>{name}</h2>))}</>
  } minutes={2}
  startTime={startTime} setStartTime={setStartTime}></Stopwatch>,
  <Counting name={<>{reps.map(({name}) => (<h2>{name}</h2>))}</>
} count={currentCount}
setCount={setCurrentCount} message={""}></Counting>,
<Weights name={<>{press.map(({name}) => (<h2>{name}</h2>))}</>
} 
count={currentCount}
setCount={setCurrentCount} message={""}
counting={currentCounting}
setCounting={setCurrentCounting} messages={""}>
</Weights>,
  ]

  return (
    (displayComponents !== -1 ?
      <>
      {displayComponents !== -1 ? components[displayComponents] :undefined}<br></br><br></br>
      <button onClick={() => setDisplayComponent(-1)}>Return</button>
      </>
      : <>
      <h1>Workout App</h1>
      <h2>Go Do Something!</h2>
      {reps.map(({name}) => (
        <p>
          <button onClick={() => setDisplayComponent(1)}>{name}</button>
        </p>
      ))}

      {timing.map(({name}) => (
        <p>
          <button onClick={() => setDisplayComponent(0)}>{name}</button>
        </p>
      ))}
       {press.map(({name}) => (
        <p>
          <button onClick={() => setDisplayComponent(2)}>{name}</button>
          
        </p>
      
      
      ))}
      </>
    )
  );
}