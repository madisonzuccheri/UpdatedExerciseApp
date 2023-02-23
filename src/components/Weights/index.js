function Weights(props){
    return(
        <>
        <p>{props.name}</p>
        <div>Rep: {props.count}</div><br></br>
        <button onClick={() => props.setCount (count=>count+1)}>Complete Rep</button>
        <button onClick={() => props.setCount (0)}>Reset</button>
        
        <div>Add Weight: {props.counting}</div><br></br>
        <button onClick={() => props.setCounting (counting=>counting+5)}>Add Weight</button>
        <button onClick={() => props.setCounting (counting=>counting-5)}>Subtract Weight</button>
        <button onClick={() => props.setCounting (0)}>Reset</button>
       
        
  </>
    )
  }
  
  
  export default Weights