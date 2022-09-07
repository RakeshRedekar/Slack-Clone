
import { Route, Routes } from 'react-router';
import './App.css';
import Chat from './Chat';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
      <Header />

      <div className='appBody'>
        <Sidebar/>
        <Routes>
          <Route path=':roomID' element={<Chat/>}/>
        </Routes>
      </div>
      
    </div>
  );
}

export default App;
