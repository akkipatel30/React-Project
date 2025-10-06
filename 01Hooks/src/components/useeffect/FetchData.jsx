import React, { useEffect, useState } from 'react'

// const FetchData = () => {

//   useEffect(() => {
//     const fetcDataFromAPI = async () => {
//       const api = await fetch('https://jsonplaceholder.typicode.com/users')
//       const result = await api.json();
//       console.log('fetching data = ', result)
//     }
//     fetcDataFromAPI();
//   }, [])



// // if (loading) return <p>Loading post...</p>;
//   return (
//     <div>
// <h2>Posts</h2>

//     </div>
//   )
// }


const TimerComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
   
const interval = setInterval(()=>{
  setCount((prev) => prev +1);
}, 1000 );

return()=>{
  clearInterval(interval);
  console.log('Interval cleared');
}
  }, [])
  return(
    <h1 className='text-amber-500 font-bold'>Timer : <span className='text-white font-normal'>{count}</span>  Seconds</h1>
  )
}

// const CountdownTimer = ({ initialSeconds }) => {
//   const [secondsLeft, setSecondsLeft] = useState(0);

//   useEffect(() => {
   
//     if (secondsLeft <= 0) return;


//     const intervalId = setInterval(() => {
//       setSecondsLeft((prevSeconds) => prevSeconds - 1);
//     }, 1000);

   
//     return () => clearInterval(intervalId);
//   }, [secondsLeft]); 

  
//   const formatTime = (totalSeconds) => {
//     const minutes = Math.floor(totalSeconds / 60);
//     const seconds = totalSeconds % 60;
//     return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
//   };

//   return (
//     <div>
//       <h2>Countdown: {formatTime(secondsLeft)}</h2>
//       {secondsLeft <= 0 && <button className='mt-3'>Time's up!</button>}
//     </div>
//   );
// };

// export default CountdownTimer;
// export default TimerComponent;
// export default FetchData