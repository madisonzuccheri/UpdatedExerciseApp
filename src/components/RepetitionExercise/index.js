function Counting(props){
  return(
      <>
      <p>{props.name}</p>
      <div>Reps: {props.count}</div><br></br>
      <button onClick={() => props.setCount (count=>count+1)}>Complete Rep</button>
      <button onClick={() => props.setCount (0)}>Reset</button>
</>
  )
}

export default Counting