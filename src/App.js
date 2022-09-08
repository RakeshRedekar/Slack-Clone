
import { useState } from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import Chat from './Chat';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      {!user? (
        <h1>LOGIN page</h1>
      ) : (
        <>
          <Header />
          <div className='appBody'>
            <Sidebar/>
            <Routes>
              <Route path=':roomID' element={<Chat/>}/>
            </Routes>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
