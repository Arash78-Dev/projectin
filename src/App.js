
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import './App.css';
import {useState} from 'react'

function App() {
  const [show, setshow] = useState(false)
  const translatehandler=()=>{
    if (!show) {
      setshow(true)
    }
  }
  const closehandler=()=>{
    if (show) {
      setshow(false)
    }
  }
let left = 'hidden';
if (show) {
  left='show'
}

  return (
    <div>
      <div className={`position-fixed sidebar bg-white ${left}`}>
        <Sidebar close={closehandler}/>
      </div>
      <div className='main'>
        <Main add={translatehandler}/>
      </div>
      </div>
  );
}

export default App;
