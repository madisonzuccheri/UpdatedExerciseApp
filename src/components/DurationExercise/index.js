import {useCallback, useEffect, useState} from 'react'

function Running ({name, minutes}) {
    const [startTime, setStartTime] = useState(0)
    const [intervalID, setIntervalID] = useState(undefined)
    const [value, setValue] = useState(0)

    function startOver() {
      setStartTime(undefined);
      setIntervalID(0);
      setValue(0);
    }


let calling = useCallback(() => {
    setInterval(() => {
        setValue(value=> value+1)
    }, 10)
    setStartTime(Date.now() + minutes*60*1000)
}, [minutes])

useEffect(() => (() => {
    clearInterval(intervalID)
}))

let currTim
if(startTime) {
    setInterval(() => {
        setValue(value => value+1)
    }, 10)
}
if(startTime !== undefined) {
    currTim = new Date(Date.now()-startTime.valueOf())
}

return(
    <>
    <p>{name}</p>
    <div>
        <p>Time:</p>
        {startTime ?
        `${currTim.getSeconds()}:${currTim.getMilliseconds()}`
        : "00:00:00"}
    </div>
    <button onClick={() => calling()}>Start</button>
    <button onClick={() => startOver()}>Reset</button>
    </>
)
}

export default Running

