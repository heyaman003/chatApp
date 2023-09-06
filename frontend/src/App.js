
import './App.css';
import Counter from './components/Counter';
import {Route,BrowserRouter,Routes} from 'react-router-dom'
import Home from './pages/Home';
import Chatpage from './pages/Chatpage';
function App() {
  return ( <div className="App">
 <BrowserRouter>
    <Routes>
     
      <Route path='/' element={<Home/>}/>
   <Route path='/chat' element={<Chatpage/>}/>
   <Route path='/counter' element={<Counter/>}/>
     
    </Routes>
  </BrowserRouter>
  </div>
   
  );
}

export default App;
