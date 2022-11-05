import React from 'react';
import ReactDOM from 'react-dom';
// import Exercise01 from './jsx-exercises/Exercise01';
// import Exercise02 from './jsx-exercises/Exercise02';
import Exercise03 from './jsx-exercises/Exercise03';
import TestComponent  from './jsx-exercises/Exercise04';
function MyThing() {
  return(
    <>
    {/* <Exercise01/> */}
    {/* <Exercise02/> */}
    {/* <Exercise03/> */}
    <TestComponent />
    </>
  )
}

ReactDOM.render(
  <MyThing/>,
  document.querySelector("#root")
)