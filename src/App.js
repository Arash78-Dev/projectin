
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import './App.css';

function App() {
  return (
    <div>
      <div className="position-fixed sidebar bg-white">
        <Sidebar/>
      </div>
      <div className="main">
        <Main/>
      </div>
      </div>
  );
}

export default App;
