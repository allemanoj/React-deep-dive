import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { countAtom } from "./store/atoms/count";
import React from 'react';

function App() {
  return (
      <RecoilRoot>
      <div>
        <Count/>
      </div>
      </RecoilRoot>
  )
}
function Count() {
  return <div>
    <CountRerender/>
    <Buttons/>
  </div>
}
function CountRerender() {
  const count = useRecoilValue(countAtom)
  return <div>
    <b>
      {count}
    </b>
    </div>
}
function Buttons() {
  const [count,setCount] = useRecoilState(countAtom);
    return <div>
      <button onClick={()=>{
          setCount(count+1);
      }}>Increment</button>
      <button onClick={()=>{
          setCount(count-1);
      }}>Decrement</button>
    </div>
}
export default App
