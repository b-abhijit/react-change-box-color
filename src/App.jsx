import { useState } from 'react'
import './style.css'

function App() {
  // eslint-disable-next-line no-unused-vars
  const [color, setColor] = useState("")

  function changeColor(newColor) {
    console.log(newColor);
    setColor(newColor);
  }

  return (
    <>
      {console.log("render")}
      <div className='container'>
        <div className="box" style={{ background: `${color}`, border: `1px solid ${color}` }}></div>
        <input placeholder='Enter color name' onChange={e => changeColor(e.target.value)} type="text" id="color"/>
      </div>
    </>
  )
}

export default App
